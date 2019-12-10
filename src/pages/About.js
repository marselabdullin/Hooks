import React, {Fragment} from 'react'

export default function About() {
    return (
        <Fragment>
            <div className="d-flex justify-content-center pb-5">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <div className="jumbotron">
                <h1 className="display-4">Привет, мир!</h1>
                    <p className="lead">Это простой пример блока с компонентом в стиле jumbotron для привлечения дополнительного внимания к содержанию или информации.</p>
                <hr className="my-4"/>
                    <p>Использются служебные классы для типографики и расстояния содержимого в контейнере большего размера.</p>
                    <p>Спиннер не остановиться! :)</p>
            </div>
        </Fragment>
    )
}