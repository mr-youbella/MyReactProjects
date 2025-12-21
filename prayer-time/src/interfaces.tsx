export interface dataTypePrayingTime
{
	fajr: string,
	dhuhr: string,
	asr: string,
	maghrib: string,
	isha: string,
}

export interface dataTypeCurrentCity
{
	city: string,
	country?: string,
}

export interface propsType
{
	name?: string,
	time?: string | undefined,
	data?: dataTypePrayingTime | null,
	img?: string,
	city_select?: string,
	is_last?: boolean,
}
