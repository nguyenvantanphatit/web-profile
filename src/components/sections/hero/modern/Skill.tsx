"use client"

import React, { useEffect, useRef, useState } from "react"
import Matter from "matter-js"
import { useTheme } from "next-themes"
import Image from "next/image"
import { DataSkill } from "@/types/skill"
interface PhysicsContainerProps {
  showPhysics: boolean
  skills?: DataSkill[]
}

export default function PhysicsContainer({ 
  showPhysics, 
  skills = [] 
}: PhysicsContainerProps) {
  const sceneRef = useRef<HTMLDivElement>(null)
  const engineRef = useRef<Matter.Engine | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const { theme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)
  const [physicsKey, setPhysicsKey] = useState(0)

  useEffect(() => {
    const updateDimensions = () => {
      if (sceneRef.current) {
        setDimensions({
          width: sceneRef.current.clientWidth,
          height: sceneRef.current.clientHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 500)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (!showPhysics || dimensions.width === 0 || dimensions.height === 0) return

    const Engine = Matter.Engine
    const Render = Matter.Render
    const Runner = Matter.Runner
    const World = Matter.World
    const Bodies = Matter.Bodies
    const Mouse = Matter.Mouse
    const MouseConstraint = Matter.MouseConstraint

    // Create engine
    const engine = Engine.create()
    engineRef.current = engine

    const render = Render.create({
      element: sceneRef.current!,
      engine: engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
      },
    })

    const runner = Runner.create()

    // Create walls
    const wallOptions = {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        strokeStyle: "transparent",
      },
    }

    const walls = [
      Bodies.rectangle(dimensions.width / 2, dimensions.height, dimensions.width, 10, wallOptions),
      Bodies.rectangle(0, dimensions.height / 2, 10, dimensions.height, wallOptions),
      Bodies.rectangle(dimensions.width, dimensions.height / 2, 10, dimensions.height, wallOptions),
    ]

    // Create skill bodies with images
    const skillSize = 50;
    
    const createSkillBody = (x: number, y: number, skill: DataSkill) => {
      const body = Bodies.circle(x, y, skillSize / 2, {
        render: {
          sprite: {
            texture: skill.image,
            xScale: skillSize / 128,
            yScale: skillSize / 128,
          }
        },
        restitution: 0.5,
        friction: 0.1,
        density: 0.001,
      }) as Matter.Body & { label?: string; isGrabbable?: boolean }

      body.label = skill.label
      body.isGrabbable = true
      return body
    }

    const skillBodies = skills.map((skill, index) => {
      const x = Math.random() * (dimensions.width - skillSize) + skillSize / 2
      const y = -skillSize * (index + 1)
      return createSkillBody(x, y, skill)
    })

    World.add(engine.world, [...walls, ...skillBodies])

    // Add mouse control
    const mouse = Mouse.create(render.canvas as HTMLElement)
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    })

    // Handle mouse interactions
    Matter.Events.on(mouseConstraint, "mousemove", () => {
      const mousePosition = mouseConstraint.mouse.position
      const hoveredBody = Matter.Query.point(skillBodies, mousePosition)[0]
      document.body.style.cursor = hoveredBody ? "grab" : "default"
    })

    Matter.Events.on(mouseConstraint, "startdrag", () => {
      if (mouseConstraint.body && (mouseConstraint.body as any).isGrabbable) {
        document.body.style.cursor = "grabbing"
      }
    })

    Matter.Events.on(mouseConstraint, "enddrag", () => {
      document.body.style.cursor = "default"
    })

    World.add(engine.world, mouseConstraint)
    render.mouse = mouse

    // Start the engine and renderer
    Runner.run(runner, engine)
    Render.run(render)

    // Reset bodies that fall out of bounds
    const resetBodyIfOutOfBounds = (body: Matter.Body) => {
      const buffer = 100
      if (
        body.position.y > dimensions.height + buffer ||
        body.position.x < -buffer ||
        body.position.x > dimensions.width + buffer
      ) {
        Matter.Body.setPosition(body, {
          x: Math.random() * (dimensions.width - skillSize) + skillSize / 2,
          y: -skillSize,
        })
        Matter.Body.setVelocity(body, { x: 0, y: 0 })
        Matter.Body.setAngularVelocity(body, 0)
      }
    }

    Matter.Events.on(engine, "afterUpdate", () => {
      skillBodies.forEach(resetBodyIfOutOfBounds)
    })

    // Prevent scroll issues
    const handleScroll = () => {
      Matter.Mouse.clearSourceEvents(mouse)
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup
    return () => {
      Render.stop(render)
      Runner.stop(runner)
      World.clear(engine.world, false)
      Engine.clear(engine)
      if (render.canvas) {
        render.canvas.remove()
      }
      render.canvas = null!
      render.context = null!
      render.textures = {}
      document.body.style.cursor = "default"
      window.removeEventListener("scroll", handleScroll)
    }
  }, [dimensions, theme, isMobile, showPhysics, physicsKey, skills])

  // Reset physics when showPhysics changes
  useEffect(() => {
    if (!showPhysics && engineRef.current) {
      const engine = engineRef.current
      Matter.World.clear(engine.world, false)
      Matter.Engine.clear(engine)
    }
    if (showPhysics) {
      setPhysicsKey(prev => prev + 1)
    }
  }, [showPhysics])

  // Static display when physics is disabled
  const StaticSkills = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors"
          >
            <Image
              src={skill.image}
              alt={skill.label}
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <span className="mt-2 text-sm font-medium">{skill.label}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {showPhysics ? (
        <div
          key={physicsKey}
          className="relative h-[400px] border border-border rounded-lg overflow-hidden bg-background/50 backdrop-blur-sm"
        >
          <div ref={sceneRef} className="absolute inset-0" />
        </div>
      ) : (
        <StaticSkills />
      )}
    </div>
  )
}