import React, {useState} from 'react';
import {Typography, Grid} from '@mui/material';
import _ from 'lodash';
import QRCode from 'qrcode.react';

import {Icon, IconSize, IconType} from '@infomat/uikit/src/Icon';
import Button from '@infomat/uikit/src/Button/Button';
import TextField from '@infomat/uikit/src/Fields/TextField/TextField';

import style from './QRField.module.scss';

const QRField = ({url}: {url?: string}) => {
	const [qrCodeText, setQRCodeText] = useState('');

	// generate QR code
	const generateQRCode = () => {
		setQRCodeText(url || '');
	};

	const downloadQRCode = () => {
		const qrCodeCanvas = document?.getElementById('qrCodeEl') as HTMLCanvasElement;
		const qrCodeURL = qrCodeCanvas?.toDataURL('image/png').replace('image/png', 'image/octet-stream');
		let aEl = document.createElement('a');
		aEl.href = qrCodeURL;
		aEl.download = 'QR_Code.png';
		document.body.appendChild(aEl);
		aEl.click();
		document.body.removeChild(aEl);
	};

	return (
		<Grid container direction="column">
			<Typography className={style.label}>{'QR - код*'}</Typography>
			<div className={style.qr}>
				<QRCode id="qrCodeEl" size={134} value={qrCodeText} />
			</div>
			<Grid item container alignItems="flex-end" spacing={3}>
				<Grid item xs={12} md={6}>
					<TextField label={'Ссылка*'} disabled value={url} />
				</Grid>
				<Grid item xs={12} md={6}>
					<Button variant="outlined" disabled={_.isUndefined(url)} className={style.button} onClick={generateQRCode}>
						Сгенерировать QR - код
					</Button>
					<Button variant="outlined" disabled={_.isUndefined(url)} onClick={downloadQRCode}>
						Скачать QR - код
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default QRField;
