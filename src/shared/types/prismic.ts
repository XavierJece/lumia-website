import type {
  FilledLinkToDocumentField,
  ImageFieldImage,
} from '@prismicio/client'

export interface IPrismicImage
  extends Pick<ImageFieldImage, 'url' | 'alt' | 'width' | 'height'> {}

export type IBlogCategory = 'Licensing' | 'Regularization'

export interface IAuthorData {
  name: string
  role?: string
  avatar?: IPrismicImage
}

export interface IAuthor {
  id: string
  data: IAuthorData
}

export interface IBlogPostData {
  title: string
  subtitle?: string
  summary?: string
  main_image?: IPrismicImage
  content: unknown[]
  category: IBlogCategory
  published_date: string
  author?: IAuthor
  seo_title?: string
  seo_description?: string
}

export interface IBlogPost {
  uid: string
  data: IBlogPostData
  tags?: string[]
  first_publication_date?: string
  last_publication_date?: string
}

export interface IServicePageData {
  service_name: string
  hero_image?: IPrismicImage
  icon?: IPrismicImage
  how_it_works_steps?: unknown[]
  faq?: unknown[]
  related_services?: FilledLinkToDocumentField<'service_page'>[]
}

export interface IServicePage {
  uid: string
  data: IServicePageData
}
