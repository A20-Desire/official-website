import type { Meta, StoryObj } from '@storybook/react'
import Hero from './Hero'

const meta: Meta<typeof Hero> = {
  title: 'Desven/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    portraitSrc: '/design (2).png'
  }
}
