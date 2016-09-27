import _ from 'lodash';

export default function(opts) {

	const currentWindowUrl = window.location.href;

	const props = _.assignIn({
		cat: 'Radium',
		action: currentWindowUrl,
	},opts);

	//check if label has been passed
	if (!props.label) {
		console.error('Event cannot run without a label.');
		return;
	}

	//check if on localhost or not
	if (currentWindowUrl.indexOf('localhost') == -1) {
		ga('send', 'event', props.cat, props.action, props.label);
	} else {
		console.log('When not local, sent via ga', props);
	}

}