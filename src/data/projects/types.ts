export type ProjectStatus =
  | 'live'
  | 'beta'
  | 'open-source'
  | 'building'
  | 'upcoming'
  | 'corporate'
  | 'acquired'
  | 'sunset'

export type ProjectCategory = 'product' | 'tool' | 'corporate' | 'client'

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  slug: string
  name: string
  year: string
  tagline: string
  summary: string
  body: string
  visual?: {
    src: string
    alt: string
  }
  stack: string[]
  status: ProjectStatus
  links: ProjectLink[]
  /** Used by the Work page filter. */
  category?: ProjectCategory
  /** Early or paused projects, listed under "Explorations" instead of the main grid. */
  explored?: boolean
}
