import React from 'react'
import { render, screen } from '@testing-library/react'
import AboutPage from '~/app/(marketing)/sobre/page'
import {
  teamMembers,
  certifications,
  timeline,
} from '~/shared/data/aboutContent'

vi.mock('next/image', () => ({
  __esModule: true,
  default: ({
    fill: _fill,
    ...rest
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...rest} />
  ),
}))

vi.mock('next/link', () => {
  const Link = ({
    children,
    href,
    ...rest
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href?.toString()} {...rest}>
      {children}
    </a>
  )
  return { __esModule: true, default: Link }
})

describe('About page', () => {
  it('renders main hero heading', () => {
    render(<AboutPage />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /sobre a lumia/i,
      }),
    ).toBeInTheDocument()
  })

  it('lists all team members', () => {
    render(<AboutPage />)
    expect(screen.getAllByTestId('team-card')).toHaveLength(teamMembers.length)
  })

  it('shows certification logos with alt text', () => {
    render(<AboutPage />)
    certifications.forEach((cert) => {
      expect(screen.getByAltText(cert.alt)).toBeInTheDocument()
    })
  })

  it('displays the full timeline', () => {
    render(<AboutPage />)
    timeline.forEach((step) => {
      expect(screen.getByText(step.year)).toBeInTheDocument()
      expect(screen.getByText(step.title)).toBeInTheDocument()
    })
  })
})
