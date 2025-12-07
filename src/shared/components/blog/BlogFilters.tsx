'use client'

import React from 'react'
import Link from 'next/link'
import type { IBlogCategory } from '~/shared/types/prismic'

interface ICategoryOption {
  label: string
  value: IBlogCategory
}

interface IBlogFiltersProps {
  categories: ICategoryOption[]
  activeCategory?: IBlogCategory | null
  basePath?: string
}

const buildHref = (basePath: string, category?: IBlogCategory | null) => {
  const params = new URLSearchParams()
  if (category) {
    params.set('category', category)
  }

  const query = params.toString()
  return query ? `${basePath}?${query}` : basePath
}

export function BlogFilters({
  categories,
  activeCategory,
  basePath = '/blog',
}: IBlogFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={basePath}
        aria-pressed={!activeCategory}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
          !activeCategory
            ? 'bg-primary-green text-white shadow-sm'
            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
        }`}
      >
        Todos
      </Link>
      {categories.map((category) => {
        const isActive = activeCategory === category.value

        return (
          <Link
            key={category.value}
            href={buildHref(basePath, category.value)}
            aria-pressed={isActive}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              isActive
                ? 'bg-primary-green text-white shadow-sm'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {category.label}
          </Link>
        )
      })}
    </div>
  )
}

export default BlogFilters
