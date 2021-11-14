import { Usuario } from './usuario';
import { Membresia } from './membresia';
export interface Venta
{
    id: String,
    client: Usuario,
    membership: Membresia,
    plan: String,
    value: number
}