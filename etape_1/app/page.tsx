import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold">Mon Site Web</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Accueil
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              À propos
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Services
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Bienvenue sur Mon Site Web
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Ce site est accessible en ligne avec sa propre URL, visible par tout le monde.
                </p>
              </div>
              <div className="space-x-4">
                <Button>En savoir plus</Button>
                <Button variant="outline">Contactez-nous</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">À propos de nous</h2>
                <p className="text-muted-foreground md:text-xl">
                  Nous sommes une entreprise dédiée à fournir des solutions web de haute qualité.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="À propos illustration"
                  className="rounded-lg object-cover"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 Mon Site Web. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Politique de confidentialité
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

