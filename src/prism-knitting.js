Prism.languages.knitting = {
	'decr': /\b((k|p)[0-9]+tog|p[0-9]*sso|s[s]*(k|p)|sk[0-9]*p|dec(r)?[0-9]*|decrease|bo|bind off)\b/i,
	'incr': /\b(yo|yarn over|inc(r)?[0-9]*|kfb|pfb|m(ake)?\s?[0-9]+|pu|pick up|co|cast on|increase)\b/i,
	'knit': /(knit( [0-9]+)?|\bk\b|k[0-9]+\s?([\[\(][0-9,\s]+[\]\)]|b|tbl)?)/i,
	'purl': /(purl( [0-9]+)?|\bp\b|p[0-9]+\s?([\[\(][0-9,\s]+[\]\)]|b|tbl)?)/i,
	'slip': /\b(ss|sl(ip)?\s?([0-9]+)?(k|p)?)\b/i,
	'repeat': /(\(|\)|(rep(eat)? from )?\*+|[0-9]+\Wtime(s)?|x\W[0-9]+|rep(eat)?)/i,
	'number': /(\Wrow(s)?\s)?[0-9]+/i
};