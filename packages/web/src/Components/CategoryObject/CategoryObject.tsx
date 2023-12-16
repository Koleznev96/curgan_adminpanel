import React, {useCallback, useState} from 'react';
import {Grid} from '@mui/material';
import {isUndefined} from 'lodash';

import PropertyHandler from '@infomat/core/src/Types/PropertyHandler';
import ButtonWithTooltip from '@infomat/uikit/src/Button/ButtonWithTooltip';
import ButtonDelete from '@infomat/uikit/src/Button/ButtonDelete';
import TextField from '@infomat/uikit/src/Fields/TextField/TextField';
import IconFiledWithPreview from '@infomat/uikit/src/Fields/IconFiledWithPreview/IconFiledWithPreview';
import {TCategoryObjectCreate} from '@infomat/core/src/Redux/CategoryObject/entityAdapter';
import ColorPicker from '@infomat/uikit/src/Fields/ColorPicker/ColorPicker';
import {TFileCrop, TFrameCrop} from '@infomat/core/src/Types/media';
import {checkUrlsNull} from 'src/Utils/checkFile';
import {Crop} from 'react-image-crop';
import FileFiledWithPreview from '@infomat/uikit/src/Fields/FileFiledWithPreview/FileFiledWithPreview';

const CategoryObject = ({onSubmit, onDelete, categoryObjectVM, id}: TCategoryObjectProps) => {
	const [title, setTitle] = useState(categoryObjectVM?.title || '');
	const [titleEn, setTitleEn] = useState(categoryObjectVM?.titleEn || '');
	const [cover, setCover] = useState<TFileCrop>(categoryObjectVM?.cover || {url3x2: null});
	const [icon, onIcon] = useState(categoryObjectVM?.icon || {url: null});
	const [coverFrame, setCoverFrame] = useState<TFrameCrop | undefined>(categoryObjectVM?.coverFrame || undefined);

	const isDisabledSave = !title.length || icon.url === null || checkUrlsNull([cover]);

	const onSave = useCallback(() => {
		onSubmit({id, title, titleEn, cover, icon, coverFrame});
	}, [onSubmit, id, title, titleEn, cover, icon, coverFrame]);

	const onAttachBackground = useCallback(
		(index: number, file: File | null, crop?: TFrameCrop) => {
			setCover({url3x2: file});
			if (file !== null && crop) {
				setCoverFrame({partName: 'cover', ...crop});
			} else {
				setCoverFrame(undefined);
			}
		},
		[setCover],
	);

	return (
		<Grid container spacing={3}>
			<Grid item container xs={12} md={12} gap={3}>
				<FileFiledWithPreview
					totalFiles={1}
					isImageAllowed
					onAttachAndCrop={onAttachBackground}
					label="Обложка категории*"
					files={[cover]}
				/>
			</Grid>
			<Grid item container xs={12} md={12} gap={3}>
				<IconFiledWithPreview onAttach={onIcon} file={icon} label="Загрузить иконку 24х24*" />
			</Grid>
			<Grid item xs={12} md={6}>
				<TextField
					label={'Название на русском языке*'}
					variant="outlined"
					tabIndex={1}
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					placeholder="Название на русском языке"
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<TextField
					label={'Название на английском языке*'}
					variant="outlined"
					tabIndex={2}
					onChange={(e) => setTitleEn(e.target.value)}
					value={titleEn}
					placeholder="Название на английском языке"
				/>
			</Grid>
			<Grid item container gap={1.5}>
				<ButtonWithTooltip onClick={onSave} disabled={isDisabledSave} tabIndex={3}>
					Сохранить
				</ButtonWithTooltip>
				{!isUndefined(id) && (
					<ButtonDelete onClick={() => onDelete({id})} tabIndex={4}>
						Удалить категорию объектов
					</ButtonDelete>
				)}
			</Grid>
		</Grid>
	);
};

type TCategoryObjectProps = {
	onSubmit: PropertyHandler<TCategoryObjectCreate>;
	onDelete: PropertyHandler<{id: number}>;
	categoryObjectVM?: TCategoryObjectCreate;
	id?: number;
};

export default CategoryObject;
