import React from 'react'
import styles from './FilesCard.module.scss'
import { DocumentIcon } from '../../../assets/icons/document-icon'
import LinearWithValueLabel from '../../LinearWithValueLabel/LinearWithValueLabel'
import { DeleteIcon } from '../../../assets/icons/delete-icon'
import { Grid, IconButton, useMediaQuery } from '@mui/material'
import { CheckIcon } from '../../../assets/icons/check-icon'
function FilesCard({ title, size, status }) {
    const isSmall = useMediaQuery('(max-width:669px)');
    let value = status.toLowerCase() == "done"
        ? 100
        : status.toLowerCase() == "pending" ? 10 : -1
    return (
        <div className={styles.card_container} style={{ borderColor: status.toLowerCase() == 'error' ? "#B42318" : "" }}>
            <div className={styles.card_left} style={{ flexWrap: isSmall ? "wrap" : "" }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isSmall ? 'space-between' : "",
                    width: isSmall ? '100%' : "",
                }}>
                    <div className={styles.file_icon}>
                        {status.toLowerCase() == 'error'
                            ? <DocumentIcon color={'#B42318'} />
                            : <DocumentIcon />
                        }
                    </div>
                    {isSmall && <>{value.toString() == "100"
                        ? <IconButton>  <CheckIcon />  </IconButton>
                        : value.toString() == "-1"
                            ? <IconButton>  <DeleteIcon color={'#B42318'} />  </IconButton>
                            : <IconButton>  <DeleteIcon />  </IconButton>
                    }</>}
                </div>
                <Grid xs={12} container className={styles.file_container}>
                    <Grid xs={12} md={6} className={styles.file_info} >
                        <div
                            className={styles.file_name}
                            style={{
                                color: status.toLowerCase() == 'error' ? "#B42318" : ""
                            }}
                        >
                            {title}
                        </div>
                        <div className={styles.file_size}
                            style={{
                                color: status.toLowerCase() == 'error' ? "#B42318" : ""
                            }}
                        >
                            {size}
                        </div>
                    </Grid>

                    <Grid xs={12} md={6} className={styles.file_status}>
                        {value >= 0 ? < LinearWithValueLabel value={value} />
                            : <div className={styles.file_error_text}>Try again</div>
                        }
                    </Grid>
                </Grid>
                {!isSmall &&
                    <>{
                        value.toString() == "100"
                            ? <IconButton>  <CheckIcon />  </IconButton>
                            : value.toString() == "-1"
                                ? <IconButton>  <DeleteIcon color={'#B42318'} />  </IconButton>
                                : <IconButton>  <DeleteIcon />  </IconButton>
                    }</>
                }
            </div>
        </div >
    )
}

export default FilesCard