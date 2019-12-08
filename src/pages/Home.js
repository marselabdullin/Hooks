import React, {Fragment} from 'react'
import Search from '../components/Search'
import Card from '../components/Card'

export default function Home() {
    const cards = new Array(15)
        .fill('')
        .map( ( item, i ) => i)

    console.log(cards)
    return (
        <Fragment>
            <Search/>
            
            <div className="row">
                {cards.map((item) => {
                    return(
                        <div className="col-sm-4 mb-4" key={item}>
                            <Card/>
                        </div>
                    )
                })}
            </div>
            
        </Fragment>
    )
}
