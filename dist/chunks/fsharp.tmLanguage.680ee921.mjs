const information_for_contributors = [
	"This file has been converted from https://github.com/ionide/ionide-fsgrammar/blob/master/grammars/fsharp.json",
	"If you want to provide a fix or improvement, please create a pull request against the original repository.",
	"Once accepted there, we are happy to receive an update request."
];
const version = "https://github.com/ionide/ionide-fsgrammar/commit/f74f4485011a9b463f1c1367195a4309a13403d6";
const name = "fsharp";
const scopeName = "source.fsharp";
const patterns = [
	{
		include: "#compiler_directives"
	},
	{
		include: "#comments"
	},
	{
		include: "#constants"
	},
	{
		include: "#strings"
	},
	{
		include: "#chars"
	},
	{
		include: "#double_tick"
	},
	{
		include: "#definition"
	},
	{
		include: "#abstract_definition"
	},
	{
		include: "#attributes"
	},
	{
		include: "#modules"
	},
	{
		include: "#anonymous_functions"
	},
	{
		include: "#du_declaration"
	},
	{
		include: "#record_declaration"
	},
	{
		include: "#records"
	},
	{
		include: "#strp_inlined"
	},
	{
		include: "#keywords"
	},
	{
		include: "#cexprs"
	},
	{
		include: "#text"
	}
];
const repository = {
	strp_inlined_body: {
		patterns: [
			{
				include: "#comments"
			},
			{
				include: "#anonymous_functions"
			},
			{
				match: "(\\^[[:alpha:]0-9'._]+)",
				captures: {
					"1": {
						name: "entity.name.type.fsharp"
					}
				}
			},
			{
				name: "keyword.fsharp",
				match: "\\b(and|when|or)\\b"
			},
			{
				begin: "(\\()",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				end: "(\\))",
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						include: "#strp_inlined_body"
					}
				]
			},
			{
				match: "(static member|member)\\s*([[:alpha:]0-9'`<>^._]+|``[[:alpha:]0-9' <>^._]+``)\\s*(:)",
				captures: {
					"1": {
						name: "keyword.fsharp"
					},
					"2": {
						name: "variable.fsharp"
					},
					"3": {
						name: "keyword.symbol.fsharp"
					}
				}
			},
			{
				include: "#compiler_directives"
			},
			{
				include: "#constants"
			},
			{
				include: "#strings"
			},
			{
				include: "#chars"
			},
			{
				include: "#double_tick"
			},
			{
				include: "#keywords"
			},
			{
				include: "#text"
			},
			{
				include: "#definition"
			},
			{
				include: "#attributes"
			},
			{
				include: "#keywords"
			},
			{
				include: "#cexprs"
			},
			{
				include: "#text"
			}
		]
	},
	strp_inlined: {
		patterns: [
			{
				begin: "(\\()",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				end: "(\\))",
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						include: "#strp_inlined_body"
					}
				]
			}
		]
	},
	generic_declaration: {
		patterns: [
			{
				comments: "SRTP syntax support",
				begin: "(:)\\s*(\\()\\s*(static member|member)",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "keyword.symbol.fsharp"
					},
					"3": {
						name: "keyword.fsharp"
					}
				},
				end: "(\\))",
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						begin: "(\\()",
						beginCaptures: {
							"1": {
								name: "keyword.symbol.fsharp"
							}
						},
						end: "(\\))",
						endCaptures: {
							"1": {
								name: "keyword.symbol.fsharp"
							}
						},
						patterns: [
							{
								include: "#member_declaration"
							}
						]
					},
					{
						match: "(('|\\^)[[:alpha:]0-9'._]+)",
						captures: {
							"1": {
								name: "entity.name.type.fsharp"
							}
						}
					},
					{
						include: "#variables"
					},
					{
						include: "#keywords"
					}
				]
			},
			{
				name: "keyword.fsharp",
				match: "\\b(private|to|public|internal|function|yield!|yield|class|exception|match|delegate|of|new|in|as|if|then|else|elif|for|begin|end|inherit|do|let\\!|return\\!|return|interface|with|abstract|enum|member|try|finally|and|when|or|use|use\\!|struct|while|mutable|assert|base|done|downcast|downto|extern|fixed|global|lazy|upcast|not)(?!')\\b"
			},
			{
				name: "keyword.fsharp",
				match: ":"
			},
			{
				include: "#constants"
			},
			{
				match: "(('|\\^)[[:alpha:]0-9'._]+)",
				captures: {
					"1": {
						name: "entity.name.type.fsharp"
					}
				}
			},
			{
				begin: "(<)",
				end: "(>)",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						match: "(('|\\^)[[:alpha:]0-9'._]+)",
						captures: {
							"1": {
								name: "entity.name.type.fsharp"
							}
						}
					},
					{
						include: "#tuple_signature"
					},
					{
						include: "#generic_declaration"
					}
				]
			},
			{
				begin: "(\\()",
				end: "(\\))",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						match: "(([?[:alpha:]0-9'`^._ ]+))+",
						captures: {
							"1": {
								name: "entity.name.type.fsharp"
							}
						}
					},
					{
						include: "#tuple_signature"
					}
				]
			},
			{
				match: "(?!when|and|or\\b)\\b([\\w0-9'`^._]+)",
				comments: "Here we need the \\w modifier in order to check that the words isn't blacklisted",
				captures: {
					"1": {
						name: "entity.name.type.fsharp"
					}
				}
			},
			{
				match: "(\\|)",
				comments: "Prevent captures of `|>` as a keyword when defining custom operator like `<|>`",
				captures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				}
			},
			{
				include: "#keywords"
			}
		]
	},
	anonymous_record_declaration: {
		begin: "(\\{\\|)",
		end: "(\\|\\})",
		beginCaptures: {
			"1": {
				name: "keyword.symbol.fsharp"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.symbol.fsharp"
			}
		},
		patterns: [
			{
				match: "[[:alpha:]0-9'`^_ ]+(:)",
				captures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				}
			},
			{
				match: "([[:alpha:]0-9'`^_ ]+)",
				captures: {
					"1": {
						name: "entity.name.type.fsharp"
					}
				}
			},
			{
				include: "#anonymous_record_declaration"
			},
			{
				include: "#keywords"
			}
		]
	},
	record_signature: {
		patterns: [
			{
				match: "[[:alpha:]0-9'`^_ ]+(=)([[:alpha:]0-9'`^_ ]+)",
				captures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "variable.parameter.fsharp"
					}
				}
			},
			{
				begin: "({)",
				end: "(})",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						match: "[[:alpha:]0-9'`^_ ]+(=)([[:alpha:]0-9'`^_ ]+)",
						captures: {
							"1": {
								name: "keyword.symbol.fsharp"
							},
							"2": {
								name: "variable.parameter.fsharp"
							}
						}
					},
					{
						include: "#record_signature"
					}
				]
			},
			{
				include: "#keywords"
			}
		]
	},
	tuple_signature: {
		patterns: [
			{
				match: "(([?[:alpha:]0-9'`^._ ]+))+",
				captures: {
					"1": {
						name: "entity.name.type.fsharp"
					}
				}
			},
			{
				begin: "(\\()",
				end: "(\\))",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						match: "(([?[:alpha:]0-9'`^._ ]+))+",
						captures: {
							"1": {
								name: "entity.name.type.fsharp"
							}
						}
					},
					{
						include: "#tuple_signature"
					}
				]
			},
			{
				include: "#keywords"
			}
		]
	},
	anonymous_functions: {
		patterns: [
			{
				name: "function.anonymous",
				begin: "\\b(fun)\\b",
				end: "(->)",
				beginCaptures: {
					"1": {
						name: "keyword.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.symbol.arrow.fsharp"
					}
				},
				patterns: [
					{
						include: "#comments"
					},
					{
						begin: "(\\()",
						end: "\\s*(?=(->))",
						beginCaptures: {
							"1": {
								name: "keyword.symbol.arrow.fsharp"
							}
						},
						endCaptures: {
							"1": {
								name: "keyword.symbol.arrow.fsharp"
							}
						},
						patterns: [
							{
								include: "#member_declaration"
							}
						]
					},
					{
						include: "#variables"
					}
				]
			}
		]
	},
	attributes: {
		patterns: [
			{
				name: "support.function.attribute.fsharp",
				begin: "\\[\\<",
				end: "\\>\\]|\\]",
				patterns: [
					{
						include: "$self"
					}
				]
			}
		]
	},
	comments: {
		patterns: [
			{
				name: "comment.literate.command.fsharp",
				match: "(\\(\\*{3}.*\\*{3}\\))",
				beginCaptures: {
					"1": {
						name: "comment.block.fsharp"
					}
				}
			},
			{
				name: "comment.block.markdown.fsharp",
				begin: "^\\s*(\\(\\*\\*(?!\\)))((?!\\*\\)).)*$",
				"while": "^(?!\\s*(\\*)+\\)\\s*$)",
				beginCaptures: {
					"1": {
						name: "comment.block.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "comment.block.fsharp"
					}
				},
				patterns: [
					{
						include: "text.html.markdown"
					}
				]
			},
			{
				name: "comment.block.fsharp",
				begin: "(\\(\\*(?!\\)))",
				end: "(\\*+\\))",
				beginCaptures: {
					"1": {
						name: "comment.block.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "comment.block.fsharp"
					}
				},
				patterns: [
					{
						comments: "Capture // when inside of (* *) like that the rule which capture comments starting by // is not trigger. See https://github.com/ionide/ionide-fsgrammar/issues/155",
						name: "fast-capture.comment.line.double-slash.fsharp",
						match: "//"
					},
					{
						include: "#comments"
					}
				]
			},
			{
				name: "comment.block.markdown.fsharp.end",
				match: "((?<!\\()(\\*)+\\))",
				captures: {
					"1": {
						name: "comment.block.fsharp"
					}
				}
			},
			{
				name: "comment.line.markdown.fsharp",
				begin: "///",
				"while": "///",
				patterns: [
					{
						include: "text.html.markdown"
					}
				]
			},
			{
				name: "comment.line.double-slash.fsharp",
				match: "//.*$"
			}
		]
	},
	constants: {
		patterns: [
			{
				name: "constant.language.unit.fsharp",
				match: "\\(\\)"
			},
			{
				name: "constant.numeric.float.fsharp",
				match: "\\b-?[0-9][0-9_]*((\\.([0-9][0-9_]*([eE][+-]??[0-9][0-9_]*)?)?)|([eE][+-]??[0-9][0-9_]*))"
			},
			{
				name: "constant.numeric.integer.nativeint.fsharp",
				match: "\\b(-?((0(x|X)[0-9a-fA-F][0-9a-fA-F_]*)|(0(o|O)[0-7][0-7_]*)|(0(b|B)[01][01_]*)|([0-9][0-9_]*)))"
			},
			{
				name: "constant.language.boolean.fsharp",
				match: "\\b(true|false)\\b"
			},
			{
				name: "constant.other.fsharp",
				match: "\\b(null|unit|void)\\b"
			}
		]
	},
	abstract_definition: {
		name: "abstract.definition.fsharp",
		begin: "\\b(abstract)\\s+(member)?(\\s+\\[\\<.*\\>\\])?\\s*([_[:alpha:]0-9,\\._`\\s]+)(:)",
		end: "\\s*(with)\\b|=|$",
		beginCaptures: {
			"1": {
				name: "keyword.fsharp"
			},
			"2": {
				name: "keyword.fsharp"
			},
			"3": {
				name: "support.function.attribute.fsharp"
			},
			"5": {
				name: "keyword.fsharp"
			}
		},
		endCaptures: {
			"1": {
				name: "keyword.fsharp"
			}
		},
		patterns: [
			{
				include: "#comments"
			},
			{
				include: "#common_declaration"
			},
			{
				match: "(\\?{0,1})([[:alpha:]0-9'`^._ ]+)\\s*(:)((?!with\\b)\\b([\\w0-9'`^._ ]+)){0,1}",
				captures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "variable.parameter.fsharp"
					},
					"3": {
						name: "keyword.symbol.fsharp"
					},
					"4": {
						name: "entity.name.type.fsharp"
					}
				}
			},
			{
				match: "(?!with|get|set\\b)\\b([\\w0-9'`^._]+)",
				comments: "Here we need the \\w modifier in order to check that the words isn't blacklisted",
				captures: {
					"1": {
						name: "entity.name.type.fsharp"
					}
				}
			},
			{
				include: "#keywords"
			}
		]
	},
	common_binding_definition: {
		patterns: [
			{
				include: "#comments"
			},
			{
				include: "#attributes"
			},
			{
				comments: "SRTP syntax support",
				begin: "(:)\\s*(\\()\\s*(static member|member)",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "keyword.symbol.fsharp"
					},
					"3": {
						name: "keyword.fsharp"
					}
				},
				end: "(\\))\\s*((?=,)|(?=\\=))",
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						match: "(\\^[[:alpha:]0-9'._]+)",
						captures: {
							"1": {
								name: "entity.name.type.fsharp"
							}
						}
					},
					{
						include: "#variables"
					},
					{
						include: "#keywords"
					}
				]
			},
			{
				begin: "(:)\\s*(\\()",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "keyword.symbol.fsharp"
					}
				},
				end: "(\\)\\s*(([?[:alpha:]0-9'`^._ ]*)))",
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "entity.name.type.fsharp"
					}
				},
				patterns: [
					{
						include: "#tuple_signature"
					}
				]
			},
			{
				begin: "(:)\\s*(\\^[[:alpha:]0-9'._]+)\\s*(when)",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "entity.name.type.fsharp"
					},
					"3": {
						name: "keyword.fsharp"
					}
				},
				end: "(?=:)",
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						name: "keyword.fsharp",
						match: "\\b(and|when|or)\\b"
					},
					{
						comment: "Because we first capture the keywords, we can capture what looks like a word and assume it's an entity definition",
						match: "([[:alpha:]0-9'^._]+)",
						captures: {
							"1": {
								name: "entity.name.type.fsharp"
							}
						}
					},
					{
						name: "keyword.symbol.fsharp",
						match: "(\\(|\\))"
					}
				]
			},
			{
				match: "(:)\\s*([?[:alpha:]0-9'`^._ ]+)",
				captures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "entity.name.type.fsharp"
					}
				}
			},
			{
				match: "(->)\\s*(\\()?\\s*([?[:alpha:]0-9'`^._ ]+)*",
				captures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "keyword.symbol.fsharp"
					},
					"3": {
						name: "entity.name.type.fsharp"
					}
				}
			},
			{
				begin: "(\\*)\\s*(\\()",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "keyword.symbol.fsharp"
					}
				},
				end: "(\\)\\s*(([?[:alpha:]0-9'`^._ ]+))+)",
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "entity.name.type.fsharp"
					}
				},
				patterns: [
					{
						include: "#tuple_signature"
					}
				]
			},
			{
				begin: "(\\*)(\\s*([?[:alpha:]0-9'`^._ ]+))*",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "entity.name.type.fsharp"
					}
				},
				end: "(?==)|(?=\\))",
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						include: "#tuple_signature"
					}
				]
			},
			{
				begin: "(<+(?![[:space:]]*\\)))",
				beginComment: "The group (?![[:space:]]*\\) is for protection against overload operator. static member (<)",
				end: "((?<!:)>|\\))",
				endComment: "The group (?<!:) prevent us from stopping on :> when using SRTP synthax",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						include: "#generic_declaration"
					}
				]
			},
			{
				include: "#anonymous_record_declaration"
			},
			{
				begin: "({)",
				end: "(})",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						include: "#record_signature"
					}
				]
			},
			{
				include: "#definition"
			},
			{
				include: "#variables"
			},
			{
				include: "#keywords"
			}
		]
	},
	definition: {
		patterns: [
			{
				name: "binding.fsharp",
				begin: "\\b(let mutable|static let mutable|static let|let inline|let|member val|static member inline|static member|default|member|override|let!)(\\s+rec|mutable)?(\\s+\\[\\<.*\\>\\])?\\s*(private|internal|public)?\\s+(\\[[^-=]*\\]|[_[:alpha:]]([_[:alpha:]0-9\\._]+)*|``[_[:alpha:]]([_[:alpha:]0-9\\._`\\s]+|(?<=,)\\s)*)?",
				end: "\\s*(with\\b|=|\\n+=|(?<=\\=))",
				beginCaptures: {
					"1": {
						name: "keyword.fsharp"
					},
					"2": {
						name: "keyword.fsharp"
					},
					"3": {
						name: "support.function.attribute.fsharp"
					},
					"4": {
						name: "storage.modifier.fsharp"
					},
					"5": {
						name: "variable.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.fsharp"
					}
				},
				patterns: [
					{
						include: "#common_binding_definition"
					}
				]
			},
			{
				name: "binding.fsharp",
				begin: "\\b(use|use!|and|and!)\\s+(\\[[^-=]*\\]|[_[:alpha:]]([_[:alpha:]0-9\\._]+)*|``[_[:alpha:]]([_[:alpha:]0-9\\._`\\s]+|(?<=,)\\s)*)?",
				end: "\\s*(=)",
				beginCaptures: {
					"1": {
						name: "keyword.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.fsharp"
					}
				},
				patterns: [
					{
						include: "#common_binding_definition"
					}
				]
			},
			{
				name: "binding.fsharp",
				begin: "(?<=with|and)\\s*\\b((get|set)\\s*(?=\\())(\\[[^-=]*\\]|[_[:alpha:]]([_[:alpha:]0-9\\._]+)*|``[_[:alpha:]]([_[:alpha:]0-9\\._`\\s]+|(?<=,)\\s)*)?",
				end: "\\s*(=|\\n+=|(?<=\\=))",
				beginCaptures: {
					"4": {
						name: "variable.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.fsharp"
					}
				},
				patterns: [
					{
						include: "#common_binding_definition"
					}
				]
			},
			{
				name: "binding.fsharp",
				begin: "\\b(static val mutable|val mutable|val)(\\s+rec|mutable)?(\\s+\\[\\<.*\\>\\])?\\s*(private|internal|public)?\\s+(\\[[^-=]*\\]|[_[:alpha:]]([_[:alpha:]0-9,\\._]+)*|``[_[:alpha:]]([_[:alpha:]0-9,\\._`\\s]+|(?<=,)\\s)*)?",
				end: "\\n$",
				beginCaptures: {
					"1": {
						name: "keyword.fsharp"
					},
					"2": {
						name: "keyword.fsharp"
					},
					"3": {
						name: "support.function.attribute.fsharp"
					},
					"4": {
						name: "storage.modifier.fsharp"
					},
					"5": {
						name: "variable.fsharp"
					}
				},
				patterns: [
					{
						include: "#common_binding_definition"
					}
				]
			},
			{
				name: "binding.fsharp",
				begin: "\\b(new)\\b\\s+(\\()",
				end: "(\\))",
				beginCaptures: {
					"1": {
						name: "keyword.fsharp"
					},
					"2": {
						name: "keyword.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.fsharp"
					}
				},
				patterns: [
					{
						include: "#common_binding_definition"
					}
				]
			}
		]
	},
	du_declaration: {
		patterns: [
			{
				name: "du_declaration.fsharp",
				begin: "\\b(of)\\b",
				end: "$|(\\|)",
				beginCaptures: {
					"1": {
						name: "keyword.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						include: "#comments"
					},
					{
						match: "([[:alpha:]0-9'`<>^._]+|``[[:alpha:]0-9' <>^._]+``)\\s*(:)\\s*([[:alpha:]0-9'`<>^._]+|``[[:alpha:]0-9' <>^._]+``)",
						captures: {
							"1": {
								name: "variable.parameter.fsharp"
							},
							"2": {
								name: "keyword.symbol.fsharp"
							},
							"3": {
								name: "entity.name.type.fsharp"
							}
						}
					},
					{
						match: "(``([[:alpha:]0-9'^._ ]+)``|[[:alpha:]0-9'`^._]+)",
						captures: {
							"1": {
								name: "entity.name.type.fsharp"
							}
						}
					},
					{
						include: "#anonymous_record_declaration"
					},
					{
						include: "#keywords"
					}
				]
			}
		]
	},
	keywords: {
		patterns: [
			{
				name: "storage.modifier",
				match: "\\b(private|public|internal)\\b"
			},
			{
				name: "keyword.fsharp",
				match: "\\b(private|to|public|internal|function|class|exception|delegate|of|as|begin|end|inherit|let!|interface|abstract|enum|member|and|when|or|use|use\\!|struct|mutable|assert|base|done|downcast|downto|extern|fixed|global|lazy|upcast|not)(?!')\\b"
			},
			{
				name: "keyword.control",
				match: "\\b(match|yield|yield!|with|if|then|else|elif|for|in|return!|return|try|finally|while|do)(?!')\\b"
			},
			{
				name: "keyword.symbol.new",
				match: "\\b(new)\\b"
			},
			{
				name: "keyword.symbol.fsharp",
				match: "(&&&|\\|\\|\\||\\^\\^\\^|~~~|<<<|>>>|\\|>|\\->|\\<\\-|:>|:\\?>|:|\\[|\\]|\\;|<>|=|@|\\|\\||&&|{|}|\\||_|\\.\\.|\\,|\\+|\\-|\\*|\\/|\\^|\\!|\\>|\\>\\=|\\>\\>|\\<|\\<\\=|\\(|\\)|\\<\\<)"
			}
		]
	},
	modules: {
		patterns: [
			{
				name: "entity.name.section.fsharp",
				begin: "\\b(namespace global)|\\b(namespace|module)\\s*(public|internal|private|rec)?\\s+([[:alpha:]][[:alpha:]0-9'_. ]*)",
				end: "(\\s?=|\\s|$)",
				beginCaptures: {
					"1": {
						name: "keyword.fsharp"
					},
					"2": {
						name: "keyword.fsharp"
					},
					"3": {
						name: "storage.modifier.fsharp"
					},
					"4": {
						name: "entity.name.section.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						name: "entity.name.section.fsharp",
						match: "(\\.)([A-Z][[:alpha:]0-9'_]*)",
						captures: {
							"1": {
								name: "punctuation.separator.namespace-reference.fsharp"
							},
							"2": {
								name: "entity.name.section.fsharp"
							}
						}
					}
				]
			},
			{
				name: "namespace.open.fsharp",
				begin: "\\b(open type|open)\\s+([[:alpha:]][[:alpha:]0-9'_]*)(?=(\\.[A-Z][[:alpha:]0-9_]*)*)",
				end: "(\\s|$)",
				beginCaptures: {
					"1": {
						name: "keyword.fsharp"
					},
					"2": {
						name: "entity.name.section.fsharp"
					}
				},
				patterns: [
					{
						name: "entity.name.section.fsharp",
						match: "(\\.)([[:alpha:]][[:alpha:]0-9'_]*)",
						captures: {
							"1": {
								name: "punctuation.separator.namespace-reference.fsharp"
							},
							"2": {
								name: "entity.name.section.fsharp"
							}
						}
					},
					{
						include: "#comments"
					}
				]
			},
			{
				name: "namespace.alias.fsharp",
				begin: "^\\s*(module)\\s+([A-Z][[:alpha:]0-9'_]*)\\s*(=)\\s*([A-Z][[:alpha:]0-9'_]*)",
				end: "(\\s|$)",
				beginCaptures: {
					"1": {
						name: "keyword.fsharp"
					},
					"2": {
						name: "entity.name.type.namespace.fsharp"
					},
					"3": {
						name: "punctuation.separator.namespace-definition.fsharp"
					},
					"4": {
						name: "entity.name.section.fsharp"
					}
				},
				patterns: [
					{
						name: "entity.name.section.fsharp",
						match: "(\\.)([A-Z][[:alpha:]0-9'_]*)",
						captures: {
							"1": {
								name: "punctuation.separator.namespace-reference.fsharp"
							},
							"2": {
								name: "entity.name.section.fsharp"
							}
						}
					}
				]
			}
		]
	},
	strings: {
		patterns: [
			{
				name: "string.quoted.literal.fsharp",
				begin: "(?=[^\\\\])(@\")",
				end: "(\")(?!\")",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.string.begin.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "punctuation.definition.string.end.fsharp"
					}
				},
				patterns: [
					{
						name: "constant.character.string.escape.fsharp",
						match: "\"(\")"
					}
				]
			},
			{
				name: "string.quoted.triple.fsharp",
				begin: "(?=[^\\\\])(\"\"\")",
				end: "(\"\"\")",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.string.begin.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "punctuation.definition.string.end.fsharp"
					}
				},
				patterns: [
					{
						include: "#string_formatter"
					}
				]
			},
			{
				name: "string.quoted.double.fsharp",
				begin: "(?=[^\\\\])(\")",
				end: "(\")",
				beginCaptures: {
					"1": {
						name: "punctuation.definition.string.begin.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "punctuation.definition.string.end.fsharp"
					}
				},
				patterns: [
					{
						name: "punctuation.separator.string.ignore-eol.fsharp",
						match: "\\\\$[ \\t]*"
					},
					{
						name: "constant.character.string.escape.fsharp",
						match: "\\\\(['\"\\\\abfnrtv]|([01][0-9][0-9]|2[0-4][0-9]|25[0-5])|(x[0-9a-fA-F]{2})|(u[0-9a-fA-F]{4})|(U00(0[0-9a-fA-F]|10)[0-9a-fA-F]{4}))"
					},
					{
						name: "invalid.illegal.character.string.fsharp",
						match: "\\\\(([0-9]{1,3})|(x[^\\s]{0,2})|(u[^\\s]{0,4})|(U[^\\s]{0,8})|[^\\s])"
					},
					{
						include: "#string_formatter"
					}
				]
			}
		]
	},
	string_formatter: {
		patterns: [
			{
				name: "entity.name.type.format.specifier.fsharp",
				match: "(%0?-?(\\d+)?((a|t)|(\\.\\d+)?(f|F|e|E|g|G|M)|(b|c|s|d|i|x|X|o|u)|(s|b|O)|(\\+?A)))",
				captures: {
					"1": {
						name: "keyword.format.specifier.fsharp"
					}
				}
			}
		]
	},
	variables: {
		patterns: [
			{
				name: "constant.language.unit.fsharp",
				match: "\\(\\)"
			},
			{
				match: "(\\?{0,1})(``[[:alpha:]0-9'`^:,._ ]+``|(?!private\\b)\\b[\\w[:alpha:]0-9'`<>^._ ]+)",
				captures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "variable.parameter.fsharp"
					}
				}
			}
		]
	},
	common_declaration: {
		patterns: [
			{
				begin: "\\s*(->)\\s*([[:alpha:]0-9'`^._ ]+)(<)",
				end: "(>)",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "entity.name.type.fsharp"
					},
					"3": {
						name: "keyword.symbol.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						match: "([[:alpha:]0-9'`^._ ]+)",
						captures: {
							"1": {
								name: "entity.name.type.fsharp"
							}
						}
					},
					{
						include: "#keywords"
					}
				]
			},
			{
				match: "\\s*(->)\\s*(?!with|get|set\\b)\\b([\\w0-9'`^._]+)",
				captures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "entity.name.type.fsharp"
					}
				}
			},
			{
				include: "#anonymous_record_declaration"
			},
			{
				begin: "(\\?{0,1})([[:alpha:]0-9'`^._ ]+)\\s*(:)(\\s*([?[:alpha:]0-9'`^._ ]+)(<))",
				end: "(>)",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "variable.parameter.fsharp"
					},
					"3": {
						name: "keyword.symbol.fsharp"
					},
					"4": {
						name: "keyword.symbol.fsharp"
					},
					"5": {
						name: "entity.name.type.fsharp"
					}
				},
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						match: "([[:alpha:]0-9'`^._ ]+)",
						captures: {
							"1": {
								name: "entity.name.type.fsharp"
							}
						}
					},
					{
						include: "#keywords"
					}
				]
			}
		]
	},
	member_declaration: {
		patterns: [
			{
				include: "#comments"
			},
			{
				include: "#common_declaration"
			},
			{
				comments: "SRTP syntax support",
				begin: "(:)\\s*(\\()\\s*(static member|member)",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "keyword.symbol.fsharp"
					},
					"3": {
						name: "keyword.fsharp"
					}
				},
				end: "(\\))\\s*((?=,)|(?=\\=))",
				endCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				patterns: [
					{
						begin: "(\\()",
						beginCaptures: {
							"1": {
								name: "keyword.symbol.fsharp"
							}
						},
						end: "(\\))",
						endCaptures: {
							"1": {
								name: "keyword.symbol.fsharp"
							}
						},
						patterns: [
							{
								include: "#member_declaration"
							}
						]
					},
					{
						match: "(\\^[[:alpha:]0-9'._]+)",
						captures: {
							"1": {
								name: "entity.name.type.fsharp"
							}
						}
					},
					{
						include: "#variables"
					},
					{
						include: "#keywords"
					}
				]
			},
			{
				match: "(\\^[[:alpha:]0-9'._]+)",
				captures: {
					"1": {
						name: "entity.name.type.fsharp"
					}
				}
			},
			{
				name: "keyword.fsharp",
				match: "\\b(and|when|or)\\b"
			},
			{
				name: "keyword.symbol.fsharp",
				match: "(\\(|\\))"
			},
			{
				match: "(\\?{0,1})([[:alpha:]0-9'`^._]+|``[[:alpha:]0-9'`^:,._ ]+``)\\s*(:{0,1})(\\s*([?[:alpha:]0-9'`<>._ ]+)){0,1}",
				captures: {
					"1": {
						name: "keyword.symbol.fsharp"
					},
					"2": {
						name: "variable.parameter.fsharp"
					},
					"3": {
						name: "keyword.symbol.fsharp"
					},
					"4": {
						name: "entity.name.type.fsharp"
					}
				}
			},
			{
				include: "#keywords"
			}
		]
	},
	double_tick: {
		patterns: [
			{
				name: "variable.other.binding.fsharp",
				match: "(``)([^`]*)(``)",
				captures: {
					"1": {
						name: "string.quoted.single.fsharp"
					},
					"2": {
						name: "variable.other.binding.fsharp"
					},
					"3": {
						name: "string.quoted.single.fsharp"
					}
				}
			}
		]
	},
	records: {
		patterns: [
			{
				name: "record.fsharp",
				begin: "\\b(type)[\\s]+(private|internal|public)?\\s*",
				end: "\\s*((with)|((as)\\s+([[:alpha:]0-9']+))|(=)|[\\n=]|(\\(\\)))",
				beginCaptures: {
					"1": {
						name: "keyword.fsharp"
					},
					"2": {
						name: "storage.modifier.fsharp"
					}
				},
				endCaptures: {
					"2": {
						name: "keyword.fsharp"
					},
					"3": {
						name: "keyword.fsharp"
					},
					"4": {
						name: "keyword.fsharp"
					},
					"5": {
						name: "variable.parameter.fsharp"
					},
					"6": {
						name: "keyword.symbol.fsharp"
					},
					"7": {
						name: "constant.language.unit.fsharp"
					}
				},
				patterns: [
					{
						include: "#comments"
					},
					{
						include: "#attributes"
					},
					{
						match: "([[:alpha:]0-9'^._]+|``[[:alpha:]0-9'`^:,._ ]+``)",
						captures: {
							"1": {
								name: "entity.name.type.fsharp"
							}
						}
					},
					{
						begin: "(<)",
						end: "((?<!:)>)",
						beginCaptures: {
							"1": {
								name: "keyword.fsharp"
							}
						},
						endCaptures: {
							"1": {
								name: "keyword.fsharp"
							}
						},
						patterns: [
							{
								match: "(('|\\^)``[[:alpha:]0-9`^:,._ ]+``|('|\\^)[[:alpha:]0-9`^:._]+)",
								captures: {
									"1": {
										name: "entity.name.type.fsharp"
									}
								}
							},
							{
								name: "keyword.fsharp",
								match: "\\b(interface|with|abstract|and|when|or|not|struct|equality|comparison|unmanaged|delegate|enum)\\b"
							},
							{
								begin: "(\\()",
								end: "(\\))",
								beginCaptures: {
									"1": {
										name: "keyword.symbol.fsharp"
									}
								},
								endCaptures: {
									"1": {
										name: "keyword.symbol.fsharp"
									}
								},
								patterns: [
									{
										match: "(static member|member|new)",
										captures: {
											"1": {
												name: "keyword.fsharp"
											}
										}
									},
									{
										include: "#common_binding_definition"
									}
								]
							},
							{
								match: "([\\w0-9'`^._]+)",
								comments: "Here we need the \\w modifier in order to check that the words isn't blacklisted",
								captures: {
									"1": {
										name: "entity.name.type.fsharp"
									}
								}
							},
							{
								include: "#keywords"
							}
						]
					},
					{
						match: "\\s*(private|internal|public)",
						captures: {
							"1": {
								name: "keyword.symbol.fsharp"
							},
							"2": {
								name: "storage.modifier.fsharp"
							}
						}
					},
					{
						begin: "(\\()",
						end: "\\s*(?=(=)|[\\n=]|(\\(\\))|(as))",
						beginCaptures: {
							"1": {
								name: "keyword.symbol.fsharp"
							}
						},
						endCaptures: {
							"1": {
								name: "keyword.symbol.fsharp"
							}
						},
						patterns: [
							{
								include: "#member_declaration"
							}
						]
					},
					{
						include: "#keywords"
					}
				]
			}
		]
	},
	record_declaration: {
		patterns: [
			{
				begin: "(\\{)",
				beginCaptures: {
					"1": {
						name: "keyword.symbol.fsharp"
					}
				},
				end: "(?<=\\})",
				patterns: [
					{
						include: "#comments"
					},
					{
						begin: "(((mutable)\\s[[:alpha:]]+)|[[:alpha:]0-9'`<>^._]*)\\s*((?<!:):(?!:))\\s*",
						beginCaptures: {
							"3": {
								name: "keyword.fsharp"
							},
							"4": {
								name: "keyword.symbol.fsharp"
							}
						},
						end: "$|(;|\\})",
						endCaptures: {
							"1": {
								name: "keyword.symbol.fsharp"
							}
						},
						patterns: [
							{
								include: "#comments"
							},
							{
								match: "([[:alpha:]0-9'`^_ ]+)",
								captures: {
									"1": {
										name: "entity.name.type.fsharp"
									}
								}
							},
							{
								include: "#keywords"
							}
						]
					},
					{
						include: "#compiler_directives"
					},
					{
						include: "#constants"
					},
					{
						include: "#strings"
					},
					{
						include: "#chars"
					},
					{
						include: "#double_tick"
					},
					{
						include: "#definition"
					},
					{
						include: "#attributes"
					},
					{
						include: "#anonymous_functions"
					},
					{
						include: "#keywords"
					},
					{
						include: "#cexprs"
					},
					{
						include: "#text"
					}
				]
			}
		]
	},
	cexprs: {
		patterns: [
			{
				name: "cexpr.fsharp",
				match: "\\b(async|seq|promise|task|maybe|asyncMaybe|controller|scope|application|pipeline)\\s*\\{",
				captures: {
					"0": {
						name: "keyword.fsharp"
					}
				}
			}
		]
	},
	chars: {
		patterns: [
			{
				name: "char.fsharp",
				match: "('\\\\?.')",
				captures: {
					"1": {
						name: "string.quoted.single.fsharp"
					}
				}
			}
		]
	},
	text: {
		patterns: [
			{
				name: "text.fsharp",
				match: "\\\\"
			}
		]
	},
	compiler_directives: {
		patterns: [
			{
				name: "keyword.control.directive.fsharp",
				match: "\\s?(#if|#elif|#elseif|#else|#endif|#light|#nowarn)",
				captures: {
				}
			}
		]
	}
};
const fsharp_tmLanguage = {
	information_for_contributors: information_for_contributors,
	version: version,
	name: name,
	scopeName: scopeName,
	patterns: patterns,
	repository: repository
};

export { fsharp_tmLanguage as default, information_for_contributors, name, patterns, repository, scopeName, version };
