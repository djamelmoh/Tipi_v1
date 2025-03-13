import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">À propos de nous</h1>
      <p className="mb-4">
        Bienvenue sur la page À propos de notre site web. Nous sommes une entreprise dédiée à fournir des solutions web
        de haute qualité.
      </p>
      <p className="mb-4">
        Notre mission est de créer des sites web accessibles et performants qui répondent aux besoins de nos clients.
      </p>
      <div className="mt-8">
        <Link href="/" className="text-primary hover:underline">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}

