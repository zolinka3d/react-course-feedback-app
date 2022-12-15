import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <h1>About This Project</h1>
        <p>Ala ma kota</p>
        <p>
            <Link to={{
                pathname: "/"
            }}>Back home</Link>
        </p>
    </Card>
  )
}

export default AboutPage