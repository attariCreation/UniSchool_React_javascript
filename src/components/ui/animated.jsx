"use client"

import dynamic from 'next/dynamic'

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false
})

const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), {
  ssr: false
})

const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), {
  ssr: false
})

const MotionSpan = dynamic(() => import('framer-motion').then((mod) => mod.motion.span), {
  ssr: false
})

export { MotionDiv, MotionH1, MotionP, MotionSpan } 