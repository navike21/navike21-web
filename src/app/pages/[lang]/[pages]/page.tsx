type TPageProps = {
  params: {
    pages: string
  }
}

export default function Page({ params }: TPageProps) {
  return <div>My Post: {params.pages}</div>
}
