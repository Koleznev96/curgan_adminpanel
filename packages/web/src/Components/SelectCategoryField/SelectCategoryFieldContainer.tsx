import React from 'react';

import {useStoreSelector} from '@infomat/core/src/Hooks/useStoreSelector';
import {selectCategoryObjectIsLoading} from '@infomat/core/src/Redux/CategoryObject/Selectors/selectCategoryObjectIsLoading';
import {selectCategoryObjectVMs} from '@infomat/core/src/Redux/CategoryObject/Selectors/defaultSelectors';
import PropertyHandler from '@infomat/core/src/Types/PropertyHandler';

import SelectField from './SelectField';

const SelectCategoryFieldContainer = ({onChange, label, placeholder, value}: TSelectCategoryFieldContainerProps) => {
	const categoryObjectVMs = useStoreSelector(selectCategoryObjectVMs);
	const isLoadingCategory = useStoreSelector(selectCategoryObjectIsLoading);

	return (
		<SelectField
			items={categoryObjectVMs}
			onChange={onChange}
			label={label}
			placeholder={placeholder}
			value={value}
			isLoading={isLoadingCategory}
		/>
	);
};

type TSelectCategoryFieldContainerProps = {
	onChange: PropertyHandler<number>;
	label?: string;
	placeholder?: string;
	value?: number;
};

export default SelectCategoryFieldContainer;
