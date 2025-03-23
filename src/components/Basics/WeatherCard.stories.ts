import WeatherCard from '@/components/Basics/WeatherCard.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Weather/Weather Card',
  component: WeatherCard,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {},
  args: {
    icon: 1,
    dayOfWeek: 1,
    temperatureMax: 1,
    temperatureMin: 1,
    unit: 'f',
  },
} satisfies Meta<typeof WeatherCard>

export default meta
type Story = StoryObj<typeof meta>

export const Sunny: Story = {
  args: {
    icon: 1,
    dayOfWeek: 5,
    temperatureMax: 15.25,
    temperatureMin: 5.75,
    unit: 'c',
  },
}
