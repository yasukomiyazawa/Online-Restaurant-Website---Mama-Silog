export interface CustomButtonProps{

    title: string
    style?: string
    href: string

}

export interface BestSellersCardProps {

    bgStyle: string
    price: number
    priceStyle: string
    item: string
    itemStyle?: string

}

export interface BlogCardProps {

    bgImg: string
    user: string
    date: string
    title: string
    description: string

}

export interface PageBannerProps {

    bgImg: string
    title: string

}

export interface MenuCardProps {

    img: string
    itemAlt: string
    item: string
    price: number
    ingr?: string
    desc: string

}

export interface BlogPostProps {

    blogImg: string
    blogTitle: string
    p1: string
    p2: string
    p3: string
    p4: string
    user: string
    date: string

}
