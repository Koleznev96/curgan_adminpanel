import React from 'react';
import {Grid, Typography} from '@mui/material';
import _ from 'lodash';

import Card from '@infomat/uikit/src/Card/Card';
import {TStatistics} from '@infomat/core/src/Redux/User/slice';

import style from './Statistics.module.scss';

const Statistics = ({data}: TStatisticsProps) => {
	return (
		<Grid container spacing={3}>
			<Grid item container spacing={3}>
				<Grid item xs={12} md={6}>
					<Card label="Пользователи">
						<Typography className={style.counter}>{data?.users}</Typography>
						<Typography className={style.title}>Зарегистрировано</Typography>
					</Card>
				</Grid>
				<Grid item xs={12} md={6}>
					<Card label="Достопримечательности">
						<div className={style.wrapper}>
							<div className={style.wrapperItem}>
								<Typography className={style.counter}>{data?.totalPlaces}</Typography>
								<Typography className={style.title}>Создано</Typography>
							</div>
							<div className={style.wrapperItem}>
								<Typography className={style.counter}>{data?.publishedPlaces}</Typography>
								<Typography className={style.title}>Опубликовано</Typography>
							</div>
						</div>
					</Card>
				</Grid>
			</Grid>
			<Grid item container spacing={3}>
				<Grid item xs={12} md={6}>
					<Card label="События">
						<div className={style.wrapper}>
							<div className={style.wrapperItem}>
								<Typography className={style.counter}>{data?.totalEvents}</Typography>
								<Typography className={style.title}>Создано</Typography>
							</div>
							<div className={style.wrapperItem}>
								<Typography className={style.counter}>{data?.publishedEvents}</Typography>
								<Typography className={style.title}>Опубликовано</Typography>
							</div>
						</div>
					</Card>
				</Grid>
				<Grid item xs={12} md={6}>
					<Card label="Услуги">
						<div className={style.wrapper}>
							<div className={style.wrapperItem}>
								<Typography className={style.counter}>{data?.totalServices}</Typography>
								<Typography className={style.title}>Создано</Typography>
							</div>
							<div className={style.wrapperItem}>
								<Typography className={style.counter}>{data?.publishedServices}</Typography>
								<Typography className={style.title}>Опубликовано</Typography>
							</div>
							<div className={style.wrapperItem}>
								<Typography className={style.counter}>{_.size(data?.categoriesStatistics)}</Typography>
								<Typography className={style.title}>Категорий создано</Typography>
							</div>
						</div>
					</Card>
				</Grid>
			</Grid>
			<Grid item container>
				<Card isFull label="Услуги по категориям">
					<div className={style.container}>
						{_.map(data?.categoriesStatistics, (item) => (
							<Grid
								key={item.id}
								container
								alignItems="center"
								className={style.containerItem}
								direction="row"
								spacing={1}
							>
								<Grid item xs={1} md={1}>
									<div className={style.boxIcon}>
										<img src={item.icon.url} className={style.iconG} />
									</div>
								</Grid>
								<Grid item xs={6} md={6}>
									<Typography className={style.title}>{item.title}</Typography>
								</Grid>
								<Grid item xs={2.3} md={2.3} container justifyContent="flex-end" alignItems="center">
									<Typography className={style.counterItem}>{item?.totalServices}</Typography>
									<Typography className={style.title}>Создано</Typography>
								</Grid>
								<Grid item xs={0.1} md={0.1}></Grid>
								<Grid item xs={2.5} md={2.5} container justifyContent="flex-end" alignItems="center">
									<Typography className={style.counterItem}>{item?.publishedServices}</Typography>
									<Typography className={style.title}>Опубликовано</Typography>
								</Grid>
							</Grid>
						))}
					</div>
				</Card>
			</Grid>
		</Grid>
	);
};

type TStatisticsProps = {
	data?: TStatistics;
};

export default Statistics;
