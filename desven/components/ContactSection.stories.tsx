import type { Meta, StoryObj } from '@storybook/react'
import ContactSection from './ContactSection'

const meta: Meta<typeof ContactSection> = {
  title: 'Desven/ContactSection',
  component: ContactSection,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof ContactSection>

export const Default: Story = {}
