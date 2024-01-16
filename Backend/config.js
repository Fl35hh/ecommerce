import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MEM'
const STRCNX = process.env.STRCNX
const BASE = process.env.BASE 
export default {
    MODO_PERSISTENCIA, PORT, STRCNX, BASE
}