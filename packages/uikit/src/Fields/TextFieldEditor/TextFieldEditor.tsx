import React from 'react';
import {TextField as MuiTextField, TextFieldProps, Typography, Grid} from '@mui/material';
import MDEditor from '@uiw/react-md-editor';
import ReactQuill from 'react-quill';

import {Icon, IconSize, IconType} from '@infomat/uikit/src/Icon';

import style from './TextFieldEditor.module.scss';
import PropertyHandler from '@infomat/core/src/Types/PropertyHandler';

const TextFieldEditor = ({label, placeholder, value, height = 200, setValue, isImage}: TTextFieldEditor) => {
	const modules = {
		toolbar: [
			[{header: '1'}, {header: '2'}, {font: []}],
			[{size: []}],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
			['link', isImage ? 'image' : undefined],
			['clean'],
		],
		clipboard: {
			// toggle to add extra line breaks when pasting HTML:
			matchVisual: false,
		},
	};
	/*
	 * Quill editor formats
	 * See https://quilljs.com/docs/formats/
	 */
	const formats = [
		'header',
		'font',
		'size',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		isImage ? 'image' : '',
	];

	return (
		<Grid container direction="column">
			{label && <Typography className={style.label}>{label}</Typography>}
			<div data-color-mode="light" style={{marginBottom: 45}}>
				{/* <MDEditor placeholder={placeholder} height={height} value={value} onChange={(e) => setValue(e || '')} /> */}
				<ReactQuill
					placeholder={placeholder}
					theme="snow"
					value={value}
					onChange={setValue}
					modules={modules}
					formats={formats}
					style={{height: height}}
				/>
			</div>
		</Grid>
	);
};

type TTextFieldEditor = {
	label?: string;
	placeholder?: string;
	value?: string;
	setValue: PropertyHandler<string>;
	height?: number;
	isImage?: boolean;
};

export default TextFieldEditor;
