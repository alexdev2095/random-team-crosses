import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Users, Shuffle } from 'lucide-react'
import DrumCard from '../components/DrumCard'
import { usePeopleContext } from '../store/people'

type Pareja = [string, string];

const DashboardContainer = () => {

    const {state, dispatch} = usePeopleContext();

    const [parejaModal, setParejaModal] = useState<Pareja | null>(null)
    const [cruceModal, setCruceModal] = useState<[Pareja, Pareja] | null>(null)


    const onAddCouples = () => {
        dispatch({
          type: "SET_COUPLE",
          payload: []
        });
      };



    const onTriggerCruce = () => {
        dispatch({
          type: "TRIGGER_CRUCE",
        });
      };

    const emptyGroups = state.group_one.length === 0 || state.group_two.length === 0
    const pendingCrosses = state.couples.length >= 2 && state.group_one.length === 0;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Generador de Parejas y Cruces</h1>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
                <Button onClick={onAddCouples} disabled={emptyGroups}>
                    <Users className="mr-2 h-4 w-4" /> Generar Pareja
                </Button>
                {/* <Button onClick={prepararCruces} disabled={!hayParejasParesFormadas || parejasDisponibles.length > 0}>
                    <Shuffle className="mr-2 h-4 w-4" /> Preparar Cruces
                </Button> */}
                <Button onClick={onTriggerCruce} disabled={!pendingCrosses }>
                    <Shuffle className="mr-2 h-4 w-4" /> Generar Cruce
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <DrumCard data={state.group_one} title='Grupo 1' type={1} />
                <DrumCard data={state.group_two} title='Grupo 2' type={1} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <DrumCard data_couples={state.couples} title='Parejas Generadas' type={2} />
                <DrumCard crosses={state.crosses} title='Cruces' type={3} />
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