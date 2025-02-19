import CardProduto from "@/app/components/cardproduto"

export async function getData() {
    const produtos = await fetch('http://localhost:5172/api/produtos').then((res) => res.json())

    return produtos
}
export async function generateStaticParams() {
    const produtos = await getData()

    return produtos.map((produto) => ({
        categoria: produto.categoria,
    }))
}

export default async function Page({ params }) {
    const produtos = await getData()

    return (
        <section className="p-2 flex flex-wrap h-full w-full">
        {produtos.map((produto) => { 
            if (params.categoria == produto.categoria.toLowerCase()) {
            return (
                <CardProduto
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
                foto={produto.foto}
            />
            )
            }
                
        })}
        </section>

    )
}