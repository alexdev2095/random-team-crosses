import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Users, Shuffle } from 'lucide-react'
import DrumCard from '../components/DrumCard'

type Pareja = [string, string];

const DashboardContainer = () => {
    const [grupo1, setGrupo1] = useState<string[]>([
        'Ana', 'Carlos', 'Elena', 'Gabriel', 'Isabel',
        'Juan', 'Karla', 'Luis', 'María', 'Nora'
    ])
    const [grupo2, setGrupo2] = useState<string[]>([
        'Oscar', 'Patricia', 'Quentin', 'Rosa', 'Sergio',
        'Teresa', 'Ulises', 'Valeria', 'Walter', 'Ximena'
    ])
    const [parejas, setParejas] = useState<Pareja[]>([])
    const [cruces, setCruces] = useState<[Pareja, Pareja][]>([])
    const [parejasDisponibles, setParejasDisponibles] = useState<Pareja[]>([])
    const [parejaModal, setParejaModal] = useState<Pareja | null>(null)
    const [cruceModal, setCruceModal] = useState<[Pareja, Pareja] | null>(null)

    const generarPareja = () => {
        if (grupo1.length > 0 && grupo2.length > 0) {
            const indice1 = Math.floor(Math.random() * grupo1.length)
            const indice2 = Math.floor(Math.random() * grupo2.length)

            const persona1 = grupo1[indice1]
            const persona2 = grupo2[indice2]

            const nuevaPareja: Pareja = [persona1, persona2]
            setParejas([...parejas, nuevaPareja])
            setParejaModal(nuevaPareja)

            setGrupo1(grupo1.filter((_, index) => index !== indice1))
            setGrupo2(grupo2.filter((_, index) => index !== indice2))
        }
    }

    const prepararCruces = () => {
        setParejasDisponibles([...parejas].sort(() => Math.random() - 0.5))
        setCruces([])
    }

    const generarCruce = () => {
        if (parejasDisponibles.length >= 2) {
            const pareja1 = parejasDisponibles.pop()!
            const pareja2 = parejasDisponibles.pop()!
            const nuevoCruce: [Pareja, Pareja] = [pareja1, pareja2]
            setCruces([...cruces, nuevoCruce])
            setCruceModal(nuevoCruce)
            setParejasDisponibles([...parejasDisponibles])
        }
    }

    const hayParejasParesFormadas = parejas.length >= 2 && parejas.length % 2 === 0
    const crucesPendientes = parejasDisponibles.length >= 2

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Generador de Parejas y Cruces</h1>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
                <Button onClick={generarPareja} disabled={grupo1.length === 0 || grupo2.length === 0}>
                    <Users className="mr-2 h-4 w-4" /> Generar Pareja
                </Button>
                <Button onClick={prepararCruces} disabled={!hayParejasParesFormadas || parejasDisponibles.length > 0}>
                    <Shuffle className="mr-2 h-4 w-4" /> Preparar Cruces
                </Button>
                <Button onClick={generarCruce} disabled={!crucesPendientes}>
                    <Shuffle className="mr-2 h-4 w-4" /> Generar Cruce
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <DrumCard data={grupo1} title='Grupo 1' type={1} />
                <DrumCard data={grupo2} title='Grupo 2' type={1} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <DrumCard data_couples={parejas} title='Parejas Generadas' type={2} />
                <DrumCard crosses={cruces} title='Cruces' type={3} />
            </div>

            <Dialog open={parejaModal !== null} onOpenChange={() => setParejaModal(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Nueva Pareja Generada</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        {parejaModal && (
                            <p className="text-center text-lg grid grid-cols-3 ">
                                <Card>{parejaModal[0]}</Card>  y <Card>{parejaModal[1]}</Card>
                            </p>
                        )}
                    </DialogDescription>
                </DialogContent>
            </Dialog>

            <Dialog open={cruceModal !== null} onOpenChange={() => setCruceModal(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Nuevo Cruce Generado</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        {cruceModal && (
                            <div className="text-center text-lg grid grid-cols-3">
                                <Card className='pt-2'><p>{cruceModal[0][0]} y {cruceModal[0][1]}</p></Card>
                                <p className="my-2">vs</p>
                                <Card className='pt-2'> <p>{cruceModal[1][0]} y {cruceModal[1][1]}</p> </Card>
                            </div>
                        )}
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default DashboardContainer