import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { Menu, Table, TableBody, TableCell, TableCellHead, TableHead, TableRow, TableRowHead  } from '@dhis2/ui'
import styles from '../App.module.css'

function Details(props) {
	return (
		<div className={styles.list}>
				<Menu dataTest="dhis2-uicore-menulist">
						<h3>{i18n.t("Details")}</h3>
						{props.details && 
							<Table dataTest="dhis2-uicore-table">
								<TableHead dataTest="dhis2-uicore-tablehead">
										<TableRowHead dataTest="dhis2-uicore-tablerowhead">
										<TableCellHead dataTest="dhis2-uicore-tablecellhead">
											{i18n.t("Key")}
										</TableCellHead>
										<TableCellHead dataTest="dhis2-uicore-tablecellhead">
											{i18n.t("Value")}
										</TableCellHead>
										</TableRowHead>
								</TableHead>
								<TableBody dataTest="dhis2-uicore-tablebody">
										<TableRow dataTest="dhis2-uicore-tablerow">
										<TableCell dataTest="dhis2-uicore-tablecell">
												id
										</TableCell>
										<TableCell dataTest={"details-id"}>
												{props.details.id}
										</TableCell>
										</TableRow>
										<TableRow dataTest="dhis2-uicore-tablerow">
										<TableCell dataTest="dhis2-uicore-tablecell">
											{i18n.t("name")}
										</TableCell>
										<TableCell dataTest={"details-name"}>
												{i18n.t(props.details.name)}
										</TableCell>
										</TableRow>
										<TableRow dataTest="dhis2-uicore-tablerow">
										<TableCell dataTest="dhis2-uicore-tablecell">
											{i18n.t("created")}
										</TableCell>
										<TableCell dataTest={"details-created"}>
												{props.details.created}
										</TableCell>
										</TableRow>
								</TableBody>
							</Table>
						}
						
				</Menu>
		</div>
	)
}
export default Details

