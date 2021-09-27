import {rest} from 'msw';

export const handlers = [
    rest.get('https://pokeapi.co/api/v2/pokemon/:name', (req, res, ctx) => {
        const {name} = req.params;

        return res(
            ctx.status(200),
            ctx.json({
            id: 1,
            name,
            height: 23,
            weight: 56
        }))
    })
]