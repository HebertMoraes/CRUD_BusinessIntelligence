export class DesignData {
  is_template!: boolean
  app_reference!: AppReference
  products!: Product[]
  tags!: string[]
  cover!: Cover
  is_deleted!: boolean
  is_premium!: boolean
  user_reference!: UserReference
  is_renamed!: boolean
  thumbs!: Thumbs
  allow_preview!: boolean
  theme_reference!: ThemeReference
  author!: Author
  module!: any
  created_at!: string
  published!: boolean
  page_format_reference!: PageFormatReference
  printable!: boolean
  pages!: Page[][]
  updated_at!: string
  app_demo!: boolean
  provider!: string
  price: any
  is_printable!: boolean
  is_public!: boolean
  published_at!: any
  slug!: any
  is_featured!: boolean
  id!: string
  title!: string
}

export interface AppReference {
  id: string
}

export interface Product {
  app_product_reference: AppProductReference
  created_at: CreatedAt
}

export interface AppProductReference {}

export interface CreatedAt {}

export interface Cover {
  raw: string
  medium: string
  high: string
  low: string
}

export interface UserReference {
  id: string
}

export interface Thumbs {
  raw: string
  medium: string
  high: string
  low: string
}

export interface ThemeReference {
  id: string
}

export interface Author {
  name: any
}

export interface PageFormatReference {
  id: string
}

export interface Page {
  page_index: number
  page_format_id: any
}






// export interface DesignData {
//     is_template: boolean
//     app_reference: AppReference
//     products: Product[]
//     tags: string[]
//     cover: Cover
//     is_deleted: boolean
//     is_premium: boolean
//     user_reference: UserReference
//     is_renamed: boolean
//     thumbs: Thumbs
//     allow_preview: boolean
//     theme_reference: ThemeReference
//     author: Author
//     module: any
//     created_at: string
//     published: boolean
//     page_format_reference: PageFormatReference
//     printable: boolean
//     pages: Page[][]
//     updated_at: string
//     app_demo: boolean
//     provider: string
//     price: any
//     is_printable: boolean
//     is_public: boolean
//     published_at: any
//     slug: any
//     is_featured: boolean
//     id: string
//     title: string
//   }
  
//   export interface AppReference {
//     id: string
//   }
  
//   export interface Product {
//     app_product_reference: AppProductReference
//     created_at: CreatedAt
//   }
  
//   export interface AppProductReference {}
  
//   export interface CreatedAt {}
  
//   export interface Cover {
//     raw: string
//     medium: string
//     high: string
//     low: string
//   }
  
//   export interface UserReference {
//     id: string
//   }
  
//   export interface Thumbs {
//     raw: string
//     medium: string
//     high: string
//     low: string
//   }
  
//   export interface ThemeReference {
//     id: string
//   }
  
//   export interface Author {
//     name: any
//   }
  
//   export interface PageFormatReference {
//     id: string
//   }
  
//   export interface Page {
//     page_index: number
//     page_format_id: any
//   }
  