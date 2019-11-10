export default function () {
	return {
		apiLocation: process.env.TELEPATH_API_LOCATION || 'http://localhost:3000'
	};
}