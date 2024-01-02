import React from 'react'
import { render } from '@testing-library/react'
import { Icon } from './Icon'
import {
  BOOSTRAP,
  FONT_AWESOME,
  HERO_ICONS,
  LARGE,
  MATERIAL_DESIGN,
  PRIMARY
} from '@Constants/shared'

describe('Icon Component', () => {
  test('renders Icon component with default props', () => {
    const { container } = render(
      <Icon
        iconName={{ fontAwesome: 'FaAngleDoubleRight' }}
        library={FONT_AWESOME}
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('renders Icon component with materialDesign library', () => {
    const { container } = render(
      <Icon
        iconName={{ materialDesign: 'MdSignalWifiOff' }}
        library={MATERIAL_DESIGN}
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('renders Icon component with heroIcons library', () => {
    const { container } = render(
      <Icon iconName={{ heroIcons: 'HiWifi' }} library={HERO_ICONS} />
    )
    expect(container).toMatchSnapshot()
  })

  test('renders Icon component with bootstrap library', () => {
    const { container } = render(
      <Icon iconName={{ bootstrap: 'BsWifi' }} library={BOOSTRAP} />
    )
    expect(container).toMatchSnapshot()
  })

  test('renders Icon component with color', () => {
    const { container } = render(
      <Icon
        iconName={{ fontAwesome: 'FaAngleDoubleRight' }}
        library={FONT_AWESOME}
        color={PRIMARY}
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('renders Icon component with size', () => {
    const { container } = render(
      <Icon
        iconName={{ fontAwesome: 'FaAngleDoubleRight' }}
        library={FONT_AWESOME}
        size={LARGE}
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('renders Icon component with className', () => {
    const { container } = render(
      <Icon
        iconName={{ fontAwesome: 'FaAngleDoubleRight' }}
        library={FONT_AWESOME}
        className="text-primary"
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('renders Icon component with custom props', () => {
    const { container } = render(
      <Icon
        iconName={{ fontAwesome: 'FaAngleDoubleRight' }}
        library={FONT_AWESOME}
        data-testid="icon"
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('renders Icon component with custom props', () => {
    const { container } = render(
      <Icon
        iconName={{ fontAwesome: 'FaAngleDoubleRight' }}
        library={HERO_ICONS}
        data-testid="icon"
      />
    )
    expect(container).toMatchSnapshot()
  })
})
