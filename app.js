// app.js
const express = require( 'express' )
const app = express()
const path = require( 'path' )
const hbs = require( 'hbs' )

app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'hbs' );

app.get( '/user/:username', ( req, res ) => {
    const name = req.params.username
    res.render( 'index', {
        name
    } )
} )

app.get( '/search', ( req, res ) => {
    const queryString = req.query.q

    res.render( 'search', {
        queryString
    } )
} )

app.get( '/band/:bandId/stage/:stageId', ( req, res ) => {
    const bands = {
        1: 'Nirvana',
        2: 'The Doors',
        3: 'Jimi Hendrix'
    }

    const stages = {
        1: 'MainStage',
        2: 'Stage B',
        3: 'Bar Stage'
    }

    const {
        bandId,
        stageId
    } = req.params

    const bandName = bands[ bandId ]
    const stageName = stages[ stageId ]

    res.send( `band: ${bandName}, stage: ${stageName}` )
} )


app.get( '/bandqs', ( req, res ) => {

    const bands = {
        1: 'Nirvana',
        2: 'The Doors',
        3: 'Jimi Hendrix'
    }

    const stages = {
        1: 'MainStage',
        2: 'Stage B',
        3: 'Bar Stage'
    }

    const {
        bandId,
        stageId
    } = req.query

    const bandName = bands[ bandId ]
    const stageName = stages[ stageId ]

    res.send( `band: ${bandName}, stage: ${stageName}` )

} )

app.listen( 3000, () => console.log( 'App listening on port 3000!' ) )