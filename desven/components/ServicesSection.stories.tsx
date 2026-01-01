import type { Meta, StoryObj } from '@storybook/react'
import ServicesSection from './ServicesSection'

const meta: Meta<typeof ServicesSection> = {
  title: 'Desven/ServicesSection',
  component: ServicesSection,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof ServicesSection>

export const Default: Story = {}
