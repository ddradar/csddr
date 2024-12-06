import { describe, expect, test } from 'vitest'
import Chart from '~/components/content/Chart.vue'
import { mount } from '@vue/test-utils'

describe('/app/components/content/Chart.vue', () => {
  const colors = [
    { name: 'NORMAL', color: 'yellow' },
    { name: 'BASIC', color: 'yellow' },
    { name: 'ANOTHER', color: 'red' },
    { name: 'MANIAC', color: 'green' },
  ] as const
  test.each([
    { levels: [1, 2, 3, 4, 5] },
    { levels: ['?' as const, 5.5, 13], charts: [1, 2, 3] },
    { levels: [3, 4, 5, 6], colors },
    { levels: [3, 4, 5], colors, charts: [1, 2, 3] },
  ])('%o renders correctly', (props: InstanceType<typeof Chart>['$props']) => {
    const sut = mount(Chart, { props })
    expect(sut.html()).toMatchSnapshot()
  })
})
