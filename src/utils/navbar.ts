interface IButtons {
  title?: string
  label: string
  icon?: string
  link?: string
  category?: string
}

export const navBarButtons: IButtons[] = [
  { title: 'Sugestões para você', label: 'início', icon: 'icon-inicio' },
  {
    title: 'Roupas',
    label: 'roupas',
    link: 'clothing',
    icon: 'icon-roupas',
    category: 'men clothing',
  },
  {
    title: 'Eletrônicos',
    label: 'eletrônicos',
    link: 'electronics',
    icon: 'icon-eletronicos',
    category: 'electronics',
  },
  {
    title: 'Acessórios',
    label: 'acessórios',
    link: 'jewelery',
    icon: 'icon-acessorios',
    category: 'jewelery',
  },
]

export const getCategory = (category: string): IButtons | undefined =>
  navBarButtons.find(({ link }) => category === link)
