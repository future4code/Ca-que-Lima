import { Request, Response } from 'express'
import selectUserById from '../data/selectUserById'
import updateUserName from '../data/updateUserName'
import updateUserNickname from '../data/updateUserNickname'


export default async function editUserById(req: Request, res: Response): Promise<any> {
    let errorCode: number = 400
    const id: number = Number(req.params.id)
    const { name, nickname } = req.body

    try {
        const user = await selectUserById(id)
        if (user) {
            if (name === "" || nickname === "") {
                throw new Error('Por favor cheque os campos')
            } else {
                if (name) {
                    await updateUserName(id, name)
                }
                if (nickname) {
                    await updateUserNickname(id, nickname)
                }
                res.status(200).send('Usuário atualizado com sucesso')
            }
        } else {
            throw new Error('Usuário não encontrado')
        }
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}