import React, {useState} from 'react'

import i18n from '@dhis2/d2-i18n'
import { Menu, MenuItem, MenuSectionHeader } from '@dhis2/ui'
import styles from './App.module.css'
import { useDataQuery } from '@dhis2/app-runtime'

// Components
import List from './main/List'
import Details from './main/Details'

const query = {
    dataSets: {
        resource: 'dataSets',
        params: {
            paging: false,
            fields: ['id', 'name', 'created'],
        }
    },
    programs: {
        resource: 'programs',
        params: {
                paging: false,
                fields: ['id', 'name', 'created'],
        }
    }
}

const MyApp = () => {

    const [details, setDetails] = useState()
    const [active, setActive] = useState("Programs")
    const {loading, error, data} = useDataQuery(query)

    const showDetails = (data) => {
        setDetails(data)
    }

    const focus = (ref) => {
        setActive(ref.value)
        setDetails()
    }
    
    return (
        <div className={styles.container}>
            <nav className={styles.menu} data-test-id="menu">
                <MenuSectionHeader label={i18n.t('Menu')} />
                <Menu>
                    <MenuItem
                        label={i18n.t('Programs')}
                        dataTest="menu-programs"
                        onClick={(ref) => focus(ref)}
                        value={"Programs"}
                        active={active == "Programs"}
                    />
                    <MenuItem
                        label={i18n.t('Data sets')}
                        dataTest="menu-dataSets"
                        onClick={(ref) => focus(ref)}
                        value={"DataSets"}
                        active={active == "DataSets"}
                    />
                </Menu>
            </nav>
            <main className={styles.main}>
                {loading && null}
                {error && <span>{`ERROR: ${error.message}`}</span>}
                {<List showDetails={showDetails} data={data} active={active} />}
                <Details details={details}/>
            </main>
        </div>
    )
}

export default MyApp
