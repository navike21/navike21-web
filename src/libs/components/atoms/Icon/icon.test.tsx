import React from 'react'
import { render } from '@testing-library/react'
import { Icon } from './Icon'

describe('Icon Component', () => {
  test('renders Icon component with default props', () => {
    const { container } = render(
      <Icon
        iconName={{ fontAwesome: 'FaAngleDoubleRight' }}
        library="fontAwesome"
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('renders Icon component with materialDesign library', () => {
    const { container } = render(
      <Icon
        iconName={{ materialDesign: 'MdSignalWifiOff' }}
        library="materialDesign"
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('renders Icon component with heroIcons library', () => {
    const { container } = render(
      <Icon iconName={{ heroIcons: 'HiWifi' }} library="heroIcons" />
    )
    expect(container).toMatchSnapshot()
  })

  test('renders Icon component with bootstrap library', () => {
    const { container } = render(
      <Icon iconName={{ bootstrap: 'BsWifi' }} library="bootstrap" />
    )
    expect(container).toMatchSnapshot()
  })

  test('renders Icon component with color', () => {
    const { container } = render(
      <Icon
        iconName={{ fontAwesome: 'FaAngleDoubleRight' }}
        library="fontAwesome"
        color="primary"
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('renders Icon component with size', () => {
    const { container } = render(
      <Icon
        iconName={{ fontAwesome: 'FaAngleDoubleRight' }}
        library="fontAwesome"
        size="large"
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('renders Icon component with className', () => {
    const { container } = render(
      <Icon
        iconName={{ fontAwesome: 'FaAngleDoubleRight' }}
        library="fontAwesome"
        className="text-primary"
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('renders Icon component with custom props', () => {
    const { container } = render(
      <Icon
        iconName={{ fontAwesome: 'FaAngleDoubleRight' }}
        library="fontAwesome"
        data-testid="icon"
      />
    )
    expect(container).toMatchSnapshot()
  })
})
