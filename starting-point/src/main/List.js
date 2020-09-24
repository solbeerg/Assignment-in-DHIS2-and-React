import React, {useState} from 'react'
import i18n from '@dhis2/d2-i18n'
import { Menu, MenuItem } from '@dhis2/ui'
import styles from '../App.module.css'

const List = (props) => {
	const [activeID, setActiveID] = useState("");
	return (
		<div className={styles.list}>
			<Menu dataTest="dhis2-uicore-menulist">
					<h3>{i18n.t("List")}</h3>
					{props.active == "Programs" ? (
						props.data && props.data.programs.programs.map((program) => 
							<MenuItem
									active={activeID == program.id}
									dataTest={"list-program-" + program.id}
									label={i18n.t(program.name)}
									onClick={() => {
										props.showDetails(program),
										setActiveID(program.id)
									}}
									value={program.id}
									key={program.id}
							/>
						)
					): props.active == "DataSets" ? (
							props.data && props.data.dataSets.dataSets.map((dataSet) => 
							<MenuItem
									active={activeID == dataSet.id}
									dataTest={"list-dataSet-" + dataSet.id}
									label={i18n.t(dataSet.name)}
									onClick={() => {
										props.showDetails(dataSet),
										setActiveID(dataSet.id)
									}}
									value={dataSet.id}
									key={dataSet.id}
							/>
							)
					): null}
			</Menu>
		</div>
	)
}

export default List
