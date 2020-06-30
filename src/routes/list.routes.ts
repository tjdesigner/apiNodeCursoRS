import { Router } from 'express';
import { uuid } from 'uuidv4';

const listRouter = Router();

listRouter.get('/',(request, response) => {
    const list = [
        {
            "privider":"Tiago de Jesus",
            "Data":"26-06-2020"
        },
        {
            "privider":"Tiago de Jesus",
            "Data":"26-06-2020"
        },
        {
            "privider":"Tiago de Jesus",
            "Data":"26-06-2020"
        }
    ];
    return response.json(list);
});

export default listRouter;