const pg = require('pg')

const pool = new pg.Pool({
    user: 'admin_user',
    host: 'dpg-cugnapjv2p9s73cl72dg-a',
    port: 5432,
    database: 'movies_stored',
    password: 'IcziI70PuPNTtXqnxAXVLo1088rg3uFX'

})

pool.query('')