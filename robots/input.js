const readline = require('readline-sync')
const state = require('./state.js')

function robot(){

	const content = {
		maximumSentences: 7
	}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()
	state.save(content)

	function askAndReturnSearchTerm() {
		return readline.question('Wikipedia: ')
	}

	function askAndReturnPrefix(){
		const prefixes = ['Who is', 'What is', 'History of']
		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma option: ') 
		const selectedPrefixText = prefixes[selectedPrefixIndex]

		return selectedPrefixText
	}
}

module.exports = robot