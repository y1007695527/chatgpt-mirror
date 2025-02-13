(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
.push([
	[6], {
		49529: function(e, n, t) {
			(window.__NEXT_P = window.__NEXT_P || [])
			.push(["/chat/[[...chatId]]", function() {
				return t(84619)
			}])
		},
		84619: function(e, n, t) {
			"use strict";
			t.r(n), t.d(n, {
				__N_SSP: function() {
					return r7
				},
				default: function() {
					return r9
				}
			});
			var r, a, o, i = t(89874),
				s = t(35250),
				l = t(91530),
				u = t.n(l),
				c = t(61432),
				d = t(70079),
				f = t(73925),
				m = t(48240),
				h = t(12762),
				g = t(98943),
				x = t(62676),
				p = t(79876),
				v = t(31501),
				b = t(61079),
				y = t(59268),
				j = {
					showAccountPaymentModal: !1
				},
				w = (0, y.ZP)()(function(e) {
					return (0, b.Z)((0, v.Z)({}, j), {
						setShowAccountPaymentModal: function(n) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u();
							e({
								showAccountPaymentModal: n
							}), t && t()
						}
					})
				}),
				C = "oai/apps/hasSeenReleaseAnnouncement",
				k = "2023-02-10";

			function Z(e) {
				var n = e.hasSeenOnboardingDate,
					t = e.userCountry,
					r = e.isUserPaid,
					a = e.canShowPaidAnnouncement,
					o = (0, d.useState)(!1),
					i = o[0],
					l = o[1];
				(0, d.useEffect)(function() {
					l(function() {
						return !Boolean(x.m.getItem("".concat(C, "/")
							.concat(k))) && !!n && n < new Date(k)
					})
				}, [n, r]);
				var u = (0, d.useCallback)(function() {
						x.m.setItem("".concat(C, "/")
							.concat(k), !0), l(!1)
					}, []),
					c = (0, h.WS)();
				(0, d.useEffect)(function() {
					i && c(g.s6.announcementViewed, {
						content: k
					})
				}, [i, c]);
				var m = w(function(e) {
						return {
							setShowAccountPaymentModal: e.setShowAccountPaymentModal,
							showAccountPaymentModal: e.showAccountPaymentModal
						}
					})
					.setShowAccountPaymentModal,
					p = (0, d.useCallback)(function() {
						m(!0, function() {
							c(g.s6.clickModalAccountPaymentSecondaryButton)
						})
					}, [c, m]),
					v = (0, d.useCallback)(function() {
						x.m.setItem("".concat(C, "/")
							.concat(k), !0), l(!1), p()
					}, [p]);
				return r ? (0, s.jsx)(f.Z, {
					size: "xs",
					isOpen: i,
					onModalClose: u,
					type: "success",
					title: "",
					primaryButton: (0, s.jsx)(f.m, {
						title: "Close",
						color: "neutral",
						onClick: u
					}),
					children: (0, s.jsx)(N, {})
				}) : a && t ? (0, s.jsx)(f.Z, {
					size: "xs",
					isOpen: i,
					onModalClose: u,
					type: "success",
					title: "",
					primaryButton: (0, s.jsx)(f.m, {
						title: "Learn more",
						color: "primary",
						onClick: v
					}),
					secondaryButton: (0, s.jsx)(f.m, {
						title: "Close",
						color: "neutral",
						onClick: u
					}),
					children: (0, s.jsx)(P, {
						userCountry: t
					})
				}) : null
			}
			var N = function() {
					return (0, s.jsxs)("div", {
						className: "mb-6 flex flex-col gap-6",
						children: [(0, s.jsx)("div", {
							className: "text-gray-800 dark:text-white",
							children: "Feb 13 update"
						}), (0, s.jsxs)("div", {
							className: "flex items-center gap-2 text-2xl",
							children: ["Turbo ", (0, s.jsx)(p.ZP, {
								icon: m.Rgz,
								className: "inline"
							}), "Default"]
						}), (0, s.jsx)("div", {
							className: "prose text-base dark:prose-invert",
							children: "Based on user feedback, we're defaulting you to a faster version of ChatGPT, previously know as Turbo. We'll keep the previous version around for a while."
						})]
					})
				},
				P = function(e) {
					var n = e.userCountry;
					return (0, s.jsxs)("div", {
						className: "mb-6 flex flex-col gap-6",
						children: [(0, s.jsx)("div", {
							className: "text-gray-800 dark:text-white",
							children: "Feb 10 update"
						}), (0, s.jsxs)("div", {
							className: "text-2xl",
							children: ["ChatGPT Plus is available in ", (0, s.jsx)("b", {
								children: n
							})]
						}), (0, s.jsxs)("div", {
							className: "prose text-base dark:prose-invert",
							children: [(0, s.jsx)("div", {
								className: "",
								children: "Subscribers will receive:"
							}), (0, s.jsxs)("ul", {
								children: [(0, s.jsx)("li", {
									children: "General access to ChatGPT, even during peak times"
								}), (0, s.jsx)("li", {
									children: "Faster response times"
								}), (0, s.jsx)("li", {
									children: "Priority access to new features and improvements"
								})]
							})]
						})]
					})
				},
				S = t(61706),
				M = t(33861),
				T = t(14806),
				I = t(64705),
				F = t(25769),
				R = t(45813),
				A = t(87093),
				D = t(6128),
				E = t(19841),
				L = t(26649),
				q = t.n(L),
				B = t(11253),
				_ = t.n(B),
				U = t(2827),
				O = t(34303),
				z = t(82018),
				G = t(36613),
				V = t(68619),
				H = t(60814),
				$ = t(66285),
				W = t(27252),
				J = {
					id: "chat",
					name: "ChatGPT",
					href: "/chat",
					theme: {
						icon: "openai",
						color: "#10a37f",
						activeColor: "#1a7f64"
					}
				},
				K = t(11699),
				Y = t(80836);

			function X(e) {
				var n = e.id,
					t = e.label;
				return (0, s.jsxs)("div", {
					className: "form-check",
					children: [(0, s.jsx)("input", {
						className: "form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
						type: "checkbox",
						value: "",
						id: n
					}), (0, s.jsx)("label", {
						className: "form-check-label inline-block text-gray-800 dark:text-gray-100",
						htmlFor: n,
						children: t
					})]
				})
			}
			var Q = t(35025),
				ee = t(42928),
				en = t(60612);

			function et(e) {
				var n = e.text,
					t = e.onDone,
					r = (0, en.Z)(),
					a = (0, d.useState)(!0),
					o = a[0],
					i = a[1],
					l = (0, d.useState)(0),
					u = l[0],
					c = l[1],
					f = (0, d.useMemo)(function() {
						return new er()
							.humanTypingDelaysQuertyDistance(n)
					}, [n]);
				return (0, d.useEffect)(function() {
					n && o && (i(!0), f.forEach(function(e, n) {
						setTimeout(function() {
							r() && (c(n), n === f.length - 1 && (i(!1), null == t || t()))
						}, e)
					}))
				}, [f, r, o, t, n]), (0, s.jsxs)(s.Fragment, {
					children: [n.substring(0, u + 1), o && "▋"]
				})
			}
			var er = function() {
					function e() {
						(0, Q.Z)(this, e)
					}
					var n = e.prototype;
					return n.qwertyDistance = function(e, n) {
						var t, r, a, o = {
								q: [0, 0],
								w: [1, 0],
								e: [2, 0],
								r: [3, 0],
								t: [4, 0],
								y: [5, 0],
								u: [6, 0],
								i: [7, 0],
								o: [8, 0],
								p: [9, 0],
								a: [0, 1],
								s: [1, 1],
								d: [2, 1],
								f: [3, 1],
								g: [4, 1],
								h: [5, 1],
								j: [6, 1],
								k: [7, 1],
								l: [8, 1],
								z: [0, 2],
								x: [1, 2],
								c: [2, 2],
								v: [3, 2],
								b: [4, 2],
								n: [5, 2],
								m: [6, 2]
							},
							i = (0, ee.Z)(null !== (t = o[e.toLowerCase()]) && void 0 !== t ? t : [0, 0], 2),
							s = i[0],
							l = i[1],
							u = (0, ee.Z)(null !== (r = o[n.toLowerCase()]) && void 0 !== r ? r : [0, 0], 2);
						return Math.abs(s - u[0]) + Math.abs(l - u[1])
					}, n.humanTypingDelaysQuertyDistance = function(e) {
						for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100, r = 0, a = [], o = 0; o < e.length; ++o) {
							var i = void 0;
							if (o > 0) {
								var s = this.qwertyDistance(e[o - 1], e[o]);
								i = 0 === s ? this.getRandomInt(n, Math.floor(t / 2)) : 1 === s ? this.getRandomInt(n, Math.floor(2 * t / 3)) : this.getRandomInt(n, t)
							} else i = this.getRandomInt(n, t);
							a.push(i + r), r += i
						}
						return a
					}, n.getRandomInt = function(e, n) {
						return Math.floor(Math.random() * (n - e + 1)) + e
					}, e
				}(),
				ea = t(39690),
				eo = t(1744);

			function ei() {
				var e = (0, T.Z)(["flex flex-col gap-2 text-gray-100 text-sm\n", ""]);
				return ei = function() {
					return e
				}, e
			}

			function es() {
				var e = (0, T.Z)(["flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n", "\n"]);
				return es = function() {
					return e
				}, e
			}

			function el() {
				var e = (0, T.Z)(["flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n", "\n"]);
				return el = function() {
					return e
				}, e
			}

			function eu() {
				var e = (0, T.Z)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
				return eu = function() {
					return e
				}, e
			}

			function ec() {
				var e = (0, T.Z)(["flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative "]);
				return ec = function() {
					return e
				}, e
			}

			function ed() {
				var e = (0, T.Z)(["absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n", ""]);
				return ed = function() {
					return e
				}, e
			}

			function ef() {
				var e = (0, T.Z)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
				return ef = function() {
					return e
				}, e
			}

			function em() {
				var e = (0, T.Z)(["p-1 hover:text-white"]);
				return em = function() {
					return e
				}, e
			}
			var eh = J.href;

			function eg(e) {
				var n = e.items,
					t = e.activeId,
					r = e.onNextPage,
					a = e.hasNextPage,
					o = e.onNewThread,
					i = e.onRefetchHistory,
					l = e.onUpdateUserModifiedTitle,
					u = e.userModifiedTitle,
					c = e.newChatName,
					f = e.isLoading,
					m = e.isError,
					h = (0, d.useRef)(null),
					g = (0, d.useState)(!1),
					x = g[0],
					p = g[1],
					v = (0, d.useCallback)(function() {
						p(!0), i()
					}, [i]),
					b = 0 === n.length;
				return (0, d.useEffect)(function() {
					h.current && h.current.scrollIntoView()
				}, []), (0, s.jsxs)(ex, {
					$centered: f || m && b,
					children: [b && f && (0, s.jsx)(eo.Z, {
						className: "m-auto"
					}), b && m && (0, s.jsxs)("div", {
						className: "p-3 italic text-gray-500",
						children: ["Unable to load history", !x && (0, s.jsx)(ea.z, {
							as: "button",
							color: "dark",
							size: "small",
							className: "m-auto mt-2",
							onClick: v,
							children: "Retry"
						})]
					}), n.map(function(e) {
						var n = t === e.id;
						return (0, s.jsx)(ep, {
							id: e.id,
							title: e.title,
							newChatName: n ? c : void 0,
							userModifiedTitle: n ? u : "",
							onUpdateUserModifiedTitle: l,
							active: n,
							forwardRef: n ? h : void 0,
							onNewThread: o,
							onRefetchHistory: i
						}, "Entry-".concat(e.id))
					}), a && (0, s.jsx)(ea.z, {
						as: "button",
						onClick: r,
						color: "dark",
						className: "m-auto mb-2",
						size: "small",
						children: "Show more"
					})]
				})
			}
			var ex = O.Z.div(ei(), function(e) {
				return e.$centered && "h-full justify-center items-center"
			});

			function ep(e) {
				var n = e.id,
					t = e.title,
					r = e.active,
					a = e.onNewThread,
					o = e.onRefetchHistory,
					i = e.onUpdateUserModifiedTitle,
					l = e.newChatName,
					f = e.userModifiedTitle,
					x = e.forwardRef,
					v = (0, K.dD)(),
					b = (0, h.WS)(),
					y = (0, c.useRouter)(),
					j = (0, d.useState)(!1),
					w = j[0],
					C = j[1],
					k = (0, d.useRef)(null),
					Z = (0, d.useState)(!1),
					N = Z[0],
					P = Z[1],
					S = (0, d.useState)(),
					M = S[0],
					T = S[1],
					I = (0, d.useCallback)(function(e) {
						var r, a;
						if (null == e || e.preventDefault(), C(!1), (null === (r = k.current) || void 0 === r ? void 0 : r.value) && (null === (a = k.current) || void 0 === a ? void 0 : a.value) !== t) {
							var s = k.current.value;
							H.ZP.patchConversation(n, {
								title: s
							}), i(s), b(g.s6.renameThread, {
								threadId: n,
								content: s
							}), o()
						}
					}, [b, n, o, i, t]),
					F = (0, d.useCallback)(function(e) {
						"Enter" === e.key && I()
					}, [I]),
					R = (0, d.useCallback)(function() {
						H.ZP.patchConversation(n, {
								is_visible: !1
							})
							.then(function() {
								o()
							}), y.asPath === eh ? a() : y.replace({
								pathname: eh
							})
					}, [n, a, o, y]),
					A = (0, d.useCallback)(function(e) {
						e.preventDefault(), b(g.s6.loadThread, {
							threadId: n
						}), y.push({
							pathname: y.pathname,
							query: {
								chatId: n
							}
						}, void 0, {
							shallow: !0
						})
					}, [b, n, y]),
					D = f || r && l || t;
				if ((0, d.useEffect)(function() {
					r && l && l !== M && T(l)
				}, [r, l, D, M, f]), w) return (0, s.jsxs)(eb, {
					$active: r,
					children: [(0, s.jsx)(p.ZP, {
						icon: m.IC0,
						className: "flex-shrink-0"
					}), (0, s.jsx)(ey, {
						ref: k,
						type: "text",
						defaultValue: D,
						autoFocus: !0,
						onKeyDown: F,
						className: "mr-0",
						onBlur: I
					}), (0, s.jsxs)(eC, {
						$active: !0,
						children: [(0, s.jsx)(ek, {
							onClick: I,
							children: (0, s.jsx)(p.ZP, {
								icon: m.UgA
							})
						}), (0, s.jsx)(ek, {
							onClick: function(e) {
								e.preventDefault(), C(!1)
							},
							children: (0, s.jsx)(p.ZP, {
								icon: m.q5L
							})
						})]
					})]
				});
				var L = M && r && !v && !f,
					q = 'Delete "'.concat(D, '"?');
				return (0, s.jsxs)(ev, {
					onClick: r ? u() : A,
					$active: r,
					className: (0, E.Z)("group", L && "animate-flash"),
					ref: x,
					children: [(0, s.jsx)(p.ZP, {
						icon: N ? m.Ybf : m.IC0
					}), (0, s.jsxs)(ej, {
						children: [L ? (0, s.jsx)(et, {
							text: D,
							onDone: o
						}) : N ? q : D, (!M || !r) && (0, s.jsx)(ew, {
							$active: r
						})]
					}), N && (0, s.jsxs)(eC, {
						$active: !0,
						children: [(0, s.jsx)(ek, {
							onClick: R,
							children: (0, s.jsx)(p.ZP, {
								icon: m.UgA
							})
						}), (0, s.jsx)(ek, {
							onClick: function() {
								P(!1)
							},
							children: (0, s.jsx)(p.ZP, {
								icon: m.q5L
							})
						})]
					}), r && !N && (0, s.jsxs)(eC, {
						$active: r,
						children: [(0, s.jsx)(ek, {
							onClick: function(e) {
								e.preventDefault(), C(!0)
							},
							children: (0, s.jsx)(p.ZP, {
								icon: m.Nte
							})
						}), (0, s.jsx)(ek, {
							onClick: function() {
								return P(!0)
							},
							children: (0, s.jsx)(p.ZP, {
								icon: m.Ybf
							})
						})]
					})]
				})
			}
			var ev = O.Z.a(es(), function(e) {
					return e.$active ? "pr-14 bg-gray-800 hover:bg-gray-800" : "hover:pr-4"
				}),
				eb = O.Z.div(el(), function(e) {
					return e.$active && "pr-14 bg-gray-800 hover:bg-gray-800"
				}),
				ey = O.Z.input(eu()),
				ej = O.Z.div(ec()),
				ew = O.Z.div(ed(), function(e) {
					return e.$active ? "from-gray-800" : "from-gray-900 group-hover:from-[#2A2B32]"
				}),
				eC = O.Z.div(ef(), function(e) {
					return e.$active ? "visible" : "invisible group-hover:visible"
				}),
				ek = O.Z.button(em()),
				eZ = t(40638),
				eN = t(29634),
				eP = t(15762),
				eS = t(54721),
				eM = t.n(eS);

			function eT() {
				var e = (0, T.Z)(["flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"]);
				return eT = function() {
					return e
				}, e
			}

			function eI() {
				var e = (0, T.Z)(["flex-col flex-1 overflow-y-auto border-b border-white/20\n", ""]);
				return eI = function() {
					return e
				}, e
			}
			var eF = O.Z.a(eT()),
				eR = O.Z.div(eI(), function(e) {
					return e.$offsetScrollbar && "-mr-2"
				}),
				eA = J.href;

			function eD(e) {
				var n = e.onClickAccountPayment,
					t = e.showAccountPaymentMenuItem,
					r = e.onClickCustomerPortal,
					a = e.showCustomerPortalMenuItem,
					o = e.onDeleteHistory,
					i = e.showDeleteHistory,
					l = e.onNewThread,
					u = e.onOpenDebugPanel,
					f = e.settings,
					x = e.children,
					v = (0, h.WS)(),
					b = (0, eP.F)(),
					y = b.theme,
					j = b.setTheme,
					w = (0, en.Z)(),
					C = (0, $.hz)(),
					k = (0, c.useRouter)(),
					Z = (0, d.useRef)(null),
					N = (0, d.useState)(!1),
					P = N[0],
					S = N[1],
					M = (0, d.useState)(!1),
					T = M[0],
					I = M[1],
					F = (0, d.useMemo)(function() {
						var e;
						return (null === (e = k.query.chatId) || void 0 === e ? void 0 : e[0]) ? (0, s.jsx)(eM(), {
							href: eA,
							children: (0, s.jsxs)(eF, {
								className: "mb-2 flex-shrink-0 border border-white/20",
								children: [(0, s.jsx)(p.ZP, {
									icon: m.OvN
								}), "New chat"]
							})
						}, "Page-reset") : (0, s.jsxs)(eF, {
							onClick: l,
							className: "mb-2 flex-shrink-0 border border-white/20",
							children: [(0, s.jsx)(p.ZP, {
								icon: m.OvN
							}), "New chat"]
						})
					}, [l, k.query.chatId]),
					R = (0, d.useCallback)(function() {
						v(g.s6.clickFaqLink)
					}, [v]);
				(0, d.useEffect)(function() {
					if (Z.current) {
						var e;
						S((e = Z.current)
							.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth)
					}
				}, [x]);
				var A = (0, W.g)(function(e) {
						return e.flags.highlightPlusUpgrade
					}),
					D = (0, d.useCallback)(function() {
						I(!1), o()
					}, [o]);
				return (0, s.jsx)("div", {
					className: "scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20",
					children: (0, s.jsxs)("nav", {
						className: "flex h-full flex-1 flex-col space-y-1 p-2",
						children: [F, (0, s.jsx)(eR, {
							ref: Z,
							$offsetScrollbar: P,
							children: x
						}), i && (0, s.jsxs)(eF, {
							onClick: function() {
								return T ? D() : I(!0)
							},
							children: [(0, s.jsx)(p.ZP, {
								icon: T ? m.UgA : m.Ybf
							}), T ? "Confirm clear conversations" : "Clear conversations"]
						}), C.has("debug") && (0, s.jsxs)(eF, {
							onClick: function() {
								return u(!0)
							},
							children: [(0, s.jsx)(p.ZP, {
								icon: m.cDN
							}), "Debug"]
						}), t && n && (0, s.jsx)(eF, {
							onClick: n,
							children: (0, s.jsxs)("span", {
								className: "flex w-full flex-row justify-between",
								children: [(0, s.jsxs)("span", {
									className: "gold-new-button flex items-center gap-3",
									children: [(0, s.jsx)(p.ZP, {
										icon: m.fzv
									}), " Contact Us"]
								}), A && (0, s.jsx)("span", {
									className: "rounded-md bg-yellow-200 py-0.5 px-1.5 text-xs font-medium uppercase text-gray-800",
									children: "NEW"
								})]
							})
						}), w() && (0, s.jsxs)(eF, {
							onClick: function() {
								return j("dark" === y ? "light" : "dark")
							},
							children: [(0, s.jsx)(p.ZP, {
								icon: "dark" === y ? m.kXG : m.wOW
							}), "dark" === y ? "Light" : "Dark", " mode"]
						}), a && r && (0, s.jsxs)(eF, {
							onClick: r,
							children: [(0, s.jsx)(p.ZP, {
								icon: m.fzv
							}), "My account"]
						}), (0, s.jsxs)(eF, {
							href: "https://help.openai.com/en/collections/3742473-chatgpt",
							target: "_blank",
							onClick: R,
							children: [(0, s.jsx)(p.ZP, {
								icon: m.AlO
							}), "Updates & FAQ"]
						}), f, (0, s.jsxs)(eF, {
							onClick: function() {
								// v(g.s6.clickLogOut, {
								// 	eventSource: "mouse"
								// }), (0, z.w7)()
							},
							children: [(0, s.jsx)(p.ZP, {
								icon: m.xqh
							}), "WeChat"]
						}), f, (0, s.jsxs)(eF, {
							onClick: function() {
								// v(g.s6.clickLogOut, {
								// 	eventSource: "mouse"
								// }), (0, z.w7)()
							},
							children: [(0, s.jsx)(p.ZP, {
								icon: m.xqh
							}), "Log out"]
						})]
					})
				})
			}
			var eE = function(e) {
					var n = e.onClickAccountPayment,
						t = e.showAccountPaymentMenuItem,
						r = e.onClickCustomerPortal,
						a = e.showCustomerPortalMenuItem,
						o = e.onDeleteHistory,
						i = e.showDeleteHistory,
						l = e.onNewThread,
						u = e.onOpenDebugPanel,
						c = e.settings,
						d = e.children;
					return (0, s.jsx)("div", {
						className: "dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col",
						children: (0, s.jsx)("div", {
							className: "flex h-full min-h-0 flex-col ",
							children: (0, s.jsx)(eD, {
								onClickAccountPayment: n,
								showAccountPaymentMenuItem: t,
								onClickCustomerPortal: r,
								showCustomerPortalMenuItem: a,
								onDeleteHistory: o,
								showDeleteHistory: i,
								onNewThread: l,
								onOpenDebugPanel: u,
								settings: c,
								children: d
							})
						})
					})
				},
				eL = function(e) {
					var n = e.onClickAccountPayment,
						t = e.showAccountPaymentMenuItem,
						r = e.onClickCustomerPortal,
						a = e.showCustomerPortalMenuItem,
						o = e.onDeleteHistory,
						i = e.onSidebarOpen,
						l = e.sidebarOpen,
						u = e.showDeleteHistory,
						c = e.onNewThread,
						f = e.onOpenDebugPanel,
						h = e.children,
						g = e.settings;
					return (0, s.jsx)(eZ.u.Root, {
						show: l,
						as: d.Fragment,
						children: (0, s.jsxs)(eN.V, {
							as: "div",
							className: "relative z-40 md:hidden",
							onClose: i,
							children: [(0, s.jsx)(eZ.u.Child, {
								as: d.Fragment,
								enter: "transition-opacity ease-linear duration-300",
								enterFrom: "opacity-0",
								enterTo: "opacity-100",
								leave: "transition-opacity ease-linear duration-300",
								leaveFrom: "opacity-100",
								leaveTo: "opacity-0",
								children: (0, s.jsx)("div", {
									className: "fixed inset-0 bg-gray-600 bg-opacity-75"
								})
							}), (0, s.jsxs)("div", {
								className: "fixed inset-0 z-40 flex",
								children: [(0, s.jsx)(eZ.u.Child, {
									as: d.Fragment,
									enter: "transition ease-in-out duration-300 transform",
									enterFrom: "-translate-x-full",
									enterTo: "translate-x-0",
									leave: "transition ease-in-out duration-300 transform",
									leaveFrom: "translate-x-0",
									leaveTo: "-translate-x-full",
									children: (0, s.jsxs)(eN.V.Panel, {
										className: "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
										children: [(0, s.jsx)(eZ.u.Child, {
											as: d.Fragment,
											enter: "ease-in-out duration-300",
											enterFrom: "opacity-0",
											enterTo: "opacity-100",
											leave: "ease-in-out duration-300",
											leaveFrom: "opacity-100",
											leaveTo: "opacity-0",
											children: (0, s.jsx)("div", {
												className: "absolute top-0 right-0 -mr-12 pt-2",
												children: (0, s.jsxs)("button", {
													type: "button",
													className: "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
													onClick: function() {
														return i(!1)
													},
													children: [(0, s.jsx)("span", {
														className: "sr-only",
														children: "Close sidebar"
													}), (0, s.jsx)(p.ZP, {
														icon: m.q5L,
														size: "medium",
														className: "text-white",
														"aria-hidden": "true"
													})]
												})
											})
										}), (0, s.jsx)(eD, {
											onClickAccountPayment: n,
											showAccountPaymentMenuItem: t,
											onClickCustomerPortal: r,
											showCustomerPortalMenuItem: a,
											onDeleteHistory: o,
											showDeleteHistory: u,
											onNewThread: c,
											onOpenDebugPanel: f,
											settings: g,
											children: h
										})]
									})
								}), (0, s.jsx)("div", {
									className: "w-14 flex-shrink-0"
								})]
							})]
						})
					})
				},
				eq = function(e) {
					var n = e.onSidebarOpen,
						t = e.onNewThread,
						r = e.title,
						a = e.newChatName,
						o = (0, d.useState)(),
						i = o[0],
						l = o[1],
						u = (0, c.useRouter)(),
						f = (0, d.useMemo)(function() {
							var e;
							return (null === (e = u.query.chatId) || void 0 === e ? void 0 : e[0]) ? (0, s.jsx)(eM(), {
								href: eA,
								children: (0, s.jsx)("button", {
									type: "button",
									className: "px-3",
									children: (0, s.jsx)(p.ZP, {
										icon: m.OvN,
										size: "medium"
									})
								})
							}, "Page-reset") : (0, s.jsx)("button", {
								type: "button",
								className: "px-3",
								onClick: t,
								children: (0, s.jsx)(p.ZP, {
									icon: m.OvN,
									size: "medium"
								})
							})
						}, [t, u.query.chatId]);
					return (0, d.useEffect)(function() {
						a !== i && l(a)
					}, [a, i]), (0, s.jsxs)("div", {
						className: "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
						children: [(0, s.jsxs)("button", {
							type: "button",
							className: "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
							onClick: function() {
								return n(!0)
							},
							children: [(0, s.jsx)("span", {
								className: "sr-only",
								children: "Open sidebar"
							}), (0, s.jsx)(p.ZP, {
								icon: m.cur,
								"aria-hidden": "true",
								size: "medium"
							})]
						}), (0, s.jsx)("h1", {
							className: "flex-1 text-center text-base font-normal",
							children: i && a ? (0, s.jsx)(et, {
								text: a
							}) : r || "New chat"
						}), f]
					})
				},
				eB = t(97374),
				e_ = t.n(eB),
				eU = t(500);

			function eO() {
				var e = (0, T.Z)(["flex flex-row gap-2 mb-4"]);
				return eO = function() {
					return e
				}, e
			}

			function ez() {
				var e = (0, T.Z)(["bg-gray-200 rounded-md text-gray-500 text-xs flex flex-row items-center gap-1 px-2 py-1"]);
				return ez = function() {
					return e
				}, e
			}

			function eG() {
				var e = (0, T.Z)(["flex items-center gap-1"]);
				return eG = function() {
					return e
				}, e
			}

			function eV() {
				var e = (0, T.Z)([""]);
				return eV = function() {
					return e
				}, e
			}
			var eH = function(e) {
					var n = e.urls,
						t = e.onRemoveUrl,
						r = e.clickable,
						a = e.className;
					return 0 === n.size ? null : (0, s.jsx)(e$, {
						className: a,
						children: Array.from(n)
							.map(function(e) {
								return (0, s.jsxs)(eW, {
									children: [(0, s.jsx)(m.XKb, {}), (0, s.jsxs)(eJ, (0, b.Z)((0, v.Z)({}, r ? {
										href: e,
										target: "_blank",
										disabled: !1
									} : {
										disabled: !0
									}), {
										children: [new URL(e)
											.hostname, r && (0, s.jsx)(m.AlO, {})
										]
									})), t && (0, s.jsx)(eK, {
										onClick: function() {
											return t(e)
										},
										children: (0, s.jsx)(m.q5L, {})
									})]
								}, e)
							})
					})
				},
				e$ = O.Z.div(eO()),
				eW = O.Z.div(ez()),
				eJ = O.Z.a(eG()),
				eK = O.Z.button(eV()),
				eY = d.memo(eH);

			function eX() {
				var e = (0, T.Z)(["\nflex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]\n", "\n"]);
				return eX = function() {
					return e
				}, e
			}

			function eQ() {
				var e = (0, T.Z)(["\nabsolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent\n", ""]);
				return eQ = function() {
					return e
				}, e
			}

			function e0() {
				var e = (0, T.Z)(["flex ml-1 mt-1.5 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"]);
				return e0 = function() {
					return e
				}, e
			}
			var e1 = e_()(function() {
				return t.e(949)
					.then(t.bind(t, 93949))
			}, {
				loadableGenerated: {
					webpack: function() {
						return [93949]
					}
				},
				ssr: !1
			});

			function e2(e) {
				var n = e.onAbortCompletion,
					t = e.onCreateNewCompletion,
					r = e.onUpdateArtifactStatus,
					a = e.onRequestMoreCompletions,
					o = e.onContinueGenerating,
					i = e.onFileUpload,
					l = e.canUpload,
					u = e.artifact,
					c = e.currentLeafId,
					f = e.currentRequestId,
					x = e.threadId,
					y = e.isCompletionInProgress,
					j = e.className,
					w = e.placeholder,
					C = e.currentPrompt,
					k = e.onChangeCurrentPrompt,
					Z = e.clearOnSubmit,
					N = void 0 === Z || Z,
					P = e.disabled,
					M = void 0 !== P && P,
					T = e.shouldRetry,
					I = e.canPause,
					F = void 0 !== I && I,
					A = e.canContinue,
					D = void 0 !== A && A,
					L = "root" === c,
					q = (0, K.dD)(),
					B = (0, h.WS)(),
					_ = (0, d.useContext)(eU.g)
					.serviceStatus,
					O = (0, d.useMemo)(function() {
						return new Set([])
					}, []),
					z = (0, d.useRef)(null),
					G = (0, d.useState)(""),
					V = G[0],
					H = G[1],
					$ = (0, d.useCallback)(function(e) {
						r({
							state: "pasted",
							url: e,
							id: e,
							contents: ""
						}), H("")
					}, [r]),
					W = (0, d.useCallback)(function(e) {
						k(e.currentTarget.value)
					}, [k]),
					J = (0, d.useCallback)(function(e) {
						if (null == e || e.preventDefault(), !M) {
							var n, a, o = null === (n = z.current) || void 0 === n ? void 0 : n.value,
								i = "".concat(null === (a = z.current) || void 0 === a ? void 0 : a.dataset.id, "-nextPrompt");
							if (o || (null == u ? void 0 : u.url)) {
								var s = (null == u ? void 0 : u.url) || "";
								(null == u ? void 0 : u.state) === "pasted" && r(function(e) {
									return (0, b.Z)((0, v.Z)({}, e), {
										state: "static"
									})
								});
								var l = (null == u ? void 0 : u.state) === "pasted" ? {
									artifacts: [null == u ? void 0 : u.url]
								} : {};
								t(i, (0, v.Z)({
									value: o || ""
								}, l), {
									eventSource: e ? "mouse" : "keyboard"
								}, s), N && k(""), H(""), (0, U.SI)(1, z.current)
							}
						}
					}, [null == u ? void 0 : u.state, null == u ? void 0 : u.url, N, M, t, r, k, ]),
					Y = (0, d.useCallback)((0, S.Z)(function() {
						var e, n, t, r;
						return (0, R.__generator)(this, function(a) {
							switch (a.label) {
								case 0:
									if (!O.has("link") || "root" !== c) return [2];
									return [4, navigator.clipboard.readText()];
								case 1:
									return n = a.sent(), t = /^https?:\/\/[^\s]+/g, (r = null === (e = n.match(t)) || void 0 === e ? void 0 : e[0]) && H(r), [2]
							}
						})
					}), [O, c]),
					X = (0, d.useCallback)(function() {
						r(null)
					}, [r]),
					Q = (0, d.useCallback)(function() {
						n("", f), a(c, {
							eventSource: "mouse"
						})
					}, [c, f, n, a, ]),
					ee = (0, d.useCallback)(function() {
						n("", f), B(g.s6.pauseCompletion, {
							threadId: x,
							eventSource: "mouse"
						})
					}, [f, x, B, n]),
					en = (0, d.useMemo)(function() {
						return {
							Enter: {
								validator: function() {
									return !M
								},
								handler: function(e) {
									q || e.shiftKey || e.isComposing || (e.preventDefault(), y || J())
								}
							},
							Escape: {
								validator: function() {
									return F && y
								},
								handler: function() {
									n("", f), B(g.s6.pauseCompletion, {
										threadId: x,
										eventSource: "keyboard"
									})
								}
							}
						}
					}, [M, q, y, J, F, n, f, B, x, ]);
				(0, d.useEffect)(function() {
					var e = z.current,
						n = function(e) {
							var n;
							(null === (n = en[e.key]) || void 0 === n ? void 0 : n.validator(e)) && en[e.key].handler(e)
						};
					return e && e.addEventListener("keydown", n),
						function() {
							e && e.removeEventListener("keydown", n)
						}
				}, [en]), (0, d.useEffect)(function() {
					var e = z.current,
						n = function(n) {
							!(null == e ? void 0 : e.value) && V && L && (n.preventDefault(), $(V))
						};
					return O.has("link") && e && L && e.addEventListener("paste", n),
						function() {
							e && e.removeEventListener("paste", n)
						}
				}, [$, c, L, r, V, O, ]), (0, d.useEffect)(function() {
					return window.addEventListener("focus", Y),
						function() {
							window.removeEventListener("focus", Y)
						}
				}, [Y]), (0, d.useEffect)(function() {
					var e;
					null === (e = z.current) || void 0 === e || e.focus()
				}, []);
				var et = !L && !y && !(null == _ ? void 0 : _.oof),
					er = (0, d.useCallback)(function() {
						o(c)
					}, [c, o]),
					eo = (0, d.useMemo)(function() {
						return (0, s.jsxs)(e5, {
							className: (0, E.Z)(T && "m-auto flex-col items-center"),
							children: [T && (0, s.jsx)("span", {
								className: "mb-3 block text-xs md:mb-auto",
								children: "There was an error generating a response"
							}), et && (0, s.jsxs)(ea.z, {
								as: "button",
								color: T ? "primary" : "neutral",
								onClick: Q,
								className: (0, E.Z)(T ? "m-auto" : "border-0 md:border"),
								children: [(0, s.jsx)(p.ZP, {
									icon: m.Qxo,
									size: q ? "small" : "xsmall"
								}), (!q || T) && "Regenerate response"]
							}), D && (0, s.jsxs)(ea.z, {
								as: "button",
								color: "neutral",
								onClick: er,
								className: "border-0 md:border",
								children: [(0, s.jsx)(p.ZP, {
									icon: m.lV_,
									className: "-rotate-180",
									size: q ? "small" : "xsmall"
								}), !q && "Continue generating"]
							}), F && y && (0, s.jsxs)(ea.z, {
								as: "button",
								color: "neutral",
								onClick: ee,
								className: "border-0 md:border",
								children: [(0, s.jsx)(p.ZP, {
									icon: m.jxP,
									size: q ? "small" : "xsmall"
								}), !q && "Stop generating"]
							}), l && !y && !L && (0, s.jsx)(e1, {
								isMobile: q,
								threadId: x,
								onFileUpload: i
							})]
						})
					}, [D, F, et, ee, Q, er, y, q, T, l, L, x, i, ]);
				return (0, s.jsx)("form", {
					className: j,
					onSubmit: J,
					children: (0, s.jsxs)("div", {
						className: "relative flex h-full flex-1 md:flex-col",
						children: [!q && eo, !T && (0, s.jsxs)(e4, {
							$disabled: T,
							children: [(null == u ? void 0 : u.state) === "pasted" && (0, s.jsx)(eY, {
								urls: new Set([u.url]),
								onRemoveUrl: X,
								className: "ml-2"
							}), (0, s.jsx)(U.ZP, {
								tabIndex: 0,
								onFocus: Y,
								value: C,
								"data-id": c,
								ref: z,
								style: {
									maxHeight: "200px"
								},
								rows: 1,
								onChange: W,
								placeholder: w,
								className: "m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0",
								disabled: T
							}), (0, s.jsx)(e6, {
								disabled: y || T || M,
								$nudgeBottom: y,
								children: y ? (0, s.jsx)("div", {
									className: "text-2xl",
									children: (0, s.jsx)(e3, {})
								}) : (0, s.jsx)(p.ZP, {
									icon: m.LbG,
									size: "small",
									className: "mr-1"
								})
							})]
						}), q && eo]
					})
				})
			}

			function e3() {
				var e = (0, d.useState)(0),
					n = e[0],
					t = e[1];
				(0, d.useEffect)(function() {
					var e = setInterval(function() {
						t(function(e) {
							return (e + 1) % 3
						})
					}, 350);
					return function() {
						return clearInterval(e)
					}
				}, []);
				for (var r = [], a = 0; a < 3; a++) r.push((0, s.jsx)("span", {
					className: a <= n ? "" : "invisible",
					children: "\xb7"
				}, a));
				return (0, s.jsx)(s.Fragment, {
					children: r
				})
			}
			var e4 = O.Z.div(eX(), function(e) {
					return e.$disabled && "bg-gray-100"
				}),
				e6 = O.Z.button(eQ(), function(e) {
					return e.$nudgeBottom && "disabled:bottom-0.5 md:disabled:bottom-1"
				}),
				e5 = O.Z.div(e0()),
				e8 = t(46275);

			function e7(e) {
				var n = e.children,
					t = e.title,
					r = e.icon,
					a = e.sidebarOpen,
					o = e.onSidebarOpen;
				return (0, s.jsx)(eZ.u.Root, {
					show: a,
					as: d.Fragment,
					children: (0, s.jsxs)(eN.V, {
						as: "div",
						className: "relative z-10",
						onClose: o,
						children: [(0, s.jsx)("div", {
							className: "fixed inset-0"
						}), (0, s.jsx)("div", {
							className: "fixed inset-0 overflow-hidden",
							children: (0, s.jsx)("div", {
								className: "absolute inset-0 overflow-hidden",
								children: (0, s.jsx)("div", {
									className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
									children: (0, s.jsx)(eZ.u.Child, {
										as: d.Fragment,
										enter: "transform transition ease-in-out duration-100 sm:duration-300",
										enterFrom: "translate-x-full",
										enterTo: "translate-x-0",
										leave: "transform transition ease-in-out duration-300 sm:duration-500",
										leaveFrom: "translate-x-0",
										leaveTo: "translate-x-full",
										children: (0, s.jsx)(eN.V.Panel, {
											className: "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
											children: (0, s.jsxs)("div", {
												className: "flex h-full flex-col overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
												children: [(0, s.jsx)("div", {
													className: "",
													children: (0, s.jsxs)("div", {
														className: "flex items-start justify-between",
														children: [(0, s.jsxs)(eN.V.Title, {
															className: "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
															children: [(0, s.jsx)(p.ZP, {
																icon: r
															}), t]
														}), (0, s.jsx)("div", {
															className: "mr-2 mt-2 flex h-7 items-center",
															children: (0, s.jsxs)("button", {
																type: "button",
																className: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
																onClick: function() {
																	return o(!1)
																},
																children: [(0, s.jsx)("span", {
																	className: "sr-only",
																	children: "Close panel"
																}), (0, s.jsx)(p.ZP, {
																	icon: m.q5L,
																	size: "medium",
																	"aria-hidden": "true"
																})]
															})
														})]
													})
												}), (0, s.jsx)("div", {
													className: "relative flex-1",
													children: n
												})]
											})
										})
									})
								})
							})
						})]
					})
				})
			}
			var e9 = t(1215);

			function ne() {
				var e = (0, T.Z)(["bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase"]);
				return ne = function() {
					return e
				}, e
			}
			var nn = O.Z.span(ne()),
				nt = t(23119),
				nr = t(95182),
				na = t.n(nr);

			function no() {
				var e = (0, T.Z)(["text-xs flex items-center justify-center gap-1"]);
				return no = function() {
					return e
				}, e
			}

			function ni() {
				var e = (0, T.Z)(["dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"]);
				return ni = function() {
					return e
				}, e
			}

			function ns() {
				var e = (0, T.Z)(["flex-grow flex-shrink-0"]);
				return ns = function() {
					return e
				}, e
			}

			function nl(e) {
				var n = e.currentPage,
					t = e.onChangeIndex,
					r = e.length,
					a = e.className,
					o = function(e) {
						t(na()(n + e, 0, r - 1))
					};
				return (0, s.jsxs)(nu, {
					className: a,
					children: [(0, s.jsx)(nc, {
						onClick: function() {
							return o(-1)
						},
						disabled: 0 === n,
						children: (0, s.jsx)(p.ZP, {
							size: "xsmall",
							icon: m.YFh
						})
					}), (0, s.jsx)(nd, {
						children: "".concat(n + 1, " / ")
							.concat(r)
					}), (0, s.jsx)(nc, {
						onClick: function() {
							return o(1)
						},
						disabled: n === r - 1,
						children: (0, s.jsx)(p.ZP, {
							size: "xsmall",
							icon: m.Tfp
						})
					})]
				})
			}
			var nu = O.Z.div(no()),
				nc = O.Z.button(ni()),
				nd = O.Z.span(ns()),
				nf = t(99847);

			function nm() {
				var e = (0, T.Z)(["text-center mt-2 flex justify-center"]);
				return nm = function() {
					return e
				}, e
			}
			var nh = O.Z.div(nm());

			function ng(e) {
				var n = e.initialText,
					t = e.role,
					r = e.threadId,
					a = e.currentLeaf,
					o = e.onUpdateNode,
					i = e.onChangeItemInView,
					l = e.onExitEdit,
					u = e.onDeleteNode,
					c = e.onRequestCompletion,
					f = e.onCreateEditNode,
					m = e.disabled,
					x = (0, h.WS)(),
					p = (0, d.useId)(),
					v = "".concat(a, "-")
					.concat(p),
					b = (0, d.useState)(n || ""),
					y = b[0],
					j = b[1],
					w = (0, d.useRef)(null);
				(0, d.useEffect)(function() {
					f(a, v)
				}, []);
				var C = (0, d.useCallback)(function(e) {
						j(e.currentTarget.value)
					}, []),
					k = (0, d.useCallback)(function() {
						o(v, y), i(v), c(V.Os.Next, v, {
							eventSource: "mouse"
						}, !0), l()
					}, [o, v, y, i, c, l, ]),
					Z = (0, d.useCallback)(function() {
						u(v), i(a), l(), x(t === V.uU.User ? g.s6.cancelEditPrompt : g.s6.cancelEditCompletion, {
							threadId: r
						})
					}, [v, a, x, i, u, l, t, r, ]);
				return (0, d.useEffect)(function() {
					var e = w.current,
						n = function(e) {
							"Enter" === e.key && e.metaKey ? k() : "Escape" === e.key && Z()
						};
					return e && e.addEventListener("keydown", n),
						function() {
							e && e.removeEventListener("keydown", n)
						}
				}, [Z, k]), (0, s.jsxs)(s.Fragment, {
					children: [(0, s.jsx)(U.ZP, {
						ref: w,
						value: y,
						onChange: C,
						className: "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0"
					}), (0, s.jsxs)(nh, {
						children: [(0, s.jsx)(ea.z, {
							as: "button",
							onClick: k,
							className: "mr-2",
							disabled: m,
							children: "Save & Submit"
						}), (0, s.jsx)(ea.z, {
							as: "button",
							color: "neutral",
							onClick: Z,
							children: "Cancel"
						})]
					})]
				})
			}
			var nx = t(77434),
				np = t(47635);

			function nv() {
				var e = (0, T.Z)(["text-sm dark:text-gray-700\n", ""]);
				return nv = function() {
					return e
				}, e
			}

			function nb() {
				var e = (0, T.Z)(["text-xs text-gray-500 line-clamp-3"]);
				return nb = function() {
					return e
				}, e
			}

			function ny() {
				var e = (0, T.Z)(["relative w-full overflow-hidden pt-[75%]"]);
				return ny = function() {
					return e
				}, e
			}

			function nj(e) {
				var n = e.title,
					t = e.description,
					r = e.url,
					a = e.imageUrl,
					o = e.className,
					i = e.metadataTitle,
					l = e.iconUrl,
					u = e.mini,
					c = Boolean(a),
					f = !(void 0 !== u && u) && !c,
					m = (0, h.WS)(),
					x = (0, d.useCallback)(function() {
						m(g.s6.carouselCardClick, {
							content: r
						})
					}, [m, r]);
				return (0, s.jsxs)(r ? "a" : "div", {
					className: (0, E.Z)("block w-full overflow-hidden rounded-lg bg-white shadow-sm shadow-gray-500", o),
					href: r,
					target: r ? "_blank" : "",
					onClick: x,
					children: [c && (0, s.jsx)(nN, {
						children: (0, s.jsx)("div", {
							className: "absolute inset-0",
							children: (0, s.jsx)("img", {
								src: a,
								alt: "image of ".concat(n),
								className: "h-full w-full object-cover"
							})
						})
					}), f && (0, s.jsx)(nC, {
						title: n,
						description: t
					}), (0, s.jsxs)("div", {
						className: "flex flex-col gap-2 p-3",
						children: [!f && (0, s.jsx)(nk, {
							$clamp: c,
							children: n
						}), (0, s.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [l && (0, s.jsx)("img", {
								src: l,
								alt: "Logo for ".concat(i),
								className: "h-6 w-6 rounded-md"
							}), i && (0, s.jsx)(nZ, {
								children: i
							})]
						})]
					})]
				})
			}
			var nw = "43px",
				nC = function(e) {
					var n = e.title,
						t = e.description;
					return (0, s.jsxs)(s.Fragment, {
						children: [(0, s.jsx)(nN, {
							children: (0, s.jsxs)("div", {
								className: "absolute inset-0 flex flex-col gap-2 p-3",
								children: [n && (0, s.jsx)(nk, {
									$clamp: !1,
									children: n
								}), t && (0, s.jsx)(nZ, {
									children: t
								})]
							})
						}), (0, s.jsx)("div", {
							className: "m-1 min-h-[".concat(nw, "]")
						})]
					})
				},
				nk = O.Z.div(nv(), function(e) {
					return e.$clamp && "line-clamp-2 min-h-[".concat(nw, "]")
				}),
				nZ = O.Z.div(nb()),
				nN = O.Z.div(ny()),
				nP = t(36025),
				nS = t(41135),
				nM = t(68483),
				nT = t.n(nM);

			function nI(e) {
				var n = e.disabled,
					t = e.onClick,
					r = e.left,
					a = e.children;
				return (0, s.jsx)("button", {
					disabled: n,
					onClick: t,
					"aria-disabled": n,
					className: (0, E.Z)("absolute top-full flex h-10 w-10 translate-y-1/4 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white shadow-sm transition-opacity hover:bg-gray-100 disabled:cursor-auto disabled:opacity-20 disabled:hover:bg-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:disabled:hover:bg-gray-700 lg:top-1/2 lg:h-8 lg:w-8 lg:-translate-y-1/2", void 0 !== r && r ? "left-1/2 -translate-x-3/4 lg:-left-2 lg:-translate-x-full" : "left-1/2 translate-x-3/4 lg:left-auto lg:-right-2 lg:translate-x-full"),
					children: a
				})
			}
			var nF = t(794),
				nR = function(e) {
					var n = e.x,
						t = e.children,
						r = e.className;
					return (0, s.jsx)(nF.E.div, {
						className: (0, E.Z)("h-full w-3/4 flex-none px-[1px] pr-4 sm:w-2/5 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4", r),
						style: {
							x: n
						},
						children: t
					})
				},
				nA = {
					type: "spring",
					bounce: 0
				},
				nD = (0, d.forwardRef)(function(e, n) {
					return (0, s.jsx)("div", {
						ref: n,
						className: (0, E.Z)("relative flex h-full w-full", e.className),
						children: e.children
					})
				});
			nD.displayName = "CarouselContainer";
			var nE = (r = {}, (0, M.Z)(r, K._G.Small, 3 / 4), (0, M.Z)(r, K._G.Medium, .4), (0, M.Z)(r, K._G.Large, .5), (0, M.Z)(r, K._G.XLarge, .5), (0, M.Z)(r, K._G.Full, 1 / 3), r),
				nL = (a = {}, (0, M.Z)(a, K._G.Small, 1), (0, M.Z)(a, K._G.Medium, 2), (0, M.Z)(a, K._G.Large, 2), (0, M.Z)(a, K._G.XLarge, 2), (0, M.Z)(a, K._G.Full, 3), a);

			function nq(e) {
				var n = e.children,
					t = e.loop,
					r = void 0 === t || t,
					a = e.className,
					o = (0, nP.c)(0),
					i = (0, d.useRef)(null),
					l = (0, d.useState)(0),
					u = l[0],
					c = l[1],
					f = (0, K.dQ)(),
					h = nL[f] || 1,
					g = d.Children.count(n) > h,
					x = d.Children.toArray(n),
					v = (0, d.useCallback)(function() {
						var e;
						return -u * ((null === (e = i.current) || void 0 === e ? void 0 : e.clientWidth) || 0) * (nE[f] || 1)
					}, [f, u]),
					b = function(e, n) {
						var t, r = (null === (t = i.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
							a = n.offset;
						a.x > r / 4 ? w() : a.x < -r / 4 ? j() : (0, nS.j)(o, v(), nA)
					},
					y = (0, d.useCallback)(function(e) {
						var n = h * e;
						r ? c(function(e) {
							return (e + n) % x.length - 1
						}) : c(function(e) {
							return na()(e + n, 0, x.length - 1)
						})
					}, [x.length, r, h]),
					j = (0, d.useCallback)(function() {
						y(1)
					}, [y]),
					w = (0, d.useCallback)(function() {
						y(-1)
					}, [y]),
					C = (0, d.useMemo)(function() {
						if (r) return [!0, !0];
						var e = u < x.length - h;
						return [u > 0, e]
					}, [x.length, u, r, h]),
					k = C[0],
					Z = C[1];
				return (0, d.useEffect)(function() {
					return (0, nS.j)(o, v(), nA)
						.stop
				}, [v, u, o]), (0, s.jsxs)("div", {
					className: (0, E.Z)("relative h-full w-full", a, g && "mb-16 lg:mb-4"),
					children: [(0, s.jsx)(nD, {
						ref: i,
						children: x.map(function(e, n) {
							return (0, s.jsx)(nR, {
								onDragEnd: b,
								x: o,
								i: n,
								className: (0, E.Z)("transition-opacity", !nT()(n, u, u + h) && "opacity-50"),
								children: e
							}, n)
						})
					}), g && (0, s.jsxs)(s.Fragment, {
						children: [(0, s.jsx)(nI, {
							onClick: w,
							left: !0,
							disabled: !k,
							children: (0, s.jsx)(p.ZP, {
								icon: m.YFh
							})
						}), (0, s.jsx)(nI, {
							onClick: j,
							disabled: !Z,
							children: (0, s.jsx)(p.ZP, {
								icon: m.Tfp
							})
						})]
					})]
				})
			}
			var nB = t(11310),
				n_ = t(62588);

			function nU() {
				var e = (0, n_.Z)()
					.installedPlugins,
					n = (0, nB.lt)()
					.enabledPluginIds;
				return (0, d.useMemo)(function() {
					return e.filter(function(e) {
						return n.has(e.id)
					})
				}, [n, e])
			}
			var nO = new Set(["og:site_name", "og:title", "og:description", "og:image", "og:url", ]),
				nz = {
					"og:site_name": "metadataTitle",
					"og:title": "title",
					"og:description": "description",
					"og:image": "imageUrl",
					"og:url": "url"
				},
				nG = /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
				nV = new Set(["airbnb.com"]),
				nH = d.memo(function(e) {
					var n, t, r, a, o = e.urlsToOpengraphTags,
						i = (n = {
								urls: Array.from(o.keys())
							}, t = n.urls, r = (0, z.kP)()
							.session, a = (0, nx.h)({
								queries: t.map(function(e) {
									return {
										queryKey: ["opengraph", e],
										queryFn: (0, S.Z)(function() {
											return (0, R.__generator)(this, function(n) {
												switch (n.label) {
													case 0:
														return [4, H.ZP.getPageMetadata({
															url: e
														})];
													case 1:
														return [2, n.sent()]
												}
											})
										}),
										enabled: Boolean(e && (null == r ? void 0 : r.accessToken)),
										retry: !1
									}
								})
							}), (0, d.useMemo)(function() {
								return a.map(function(e, n) {
										var r = e.data,
											a = e.isError,
											o = e.isLoading,
											i = t[n];
										if (a || o) return null;
										var s = r.tags.reduce(function(e, n) {
											return nO.has(n.type) && (e[nz[n.type]] = n.value), e
										}, {});
										return i.split(/[#?]/)[0] !== s.url ? null : (s.url = i, s)
									})
									.filter(Boolean)
							}, [a, t])),
						l = nU(),
						u = (0, d.useMemo)(function() {
							return !i.some(function(e) {
								return Boolean(null == e ? void 0 : e.imageUrl)
							})
						}, [i]),
						c = (0, d.useMemo)(function() {
							return l.reduce(function(e, n) {
								return e.set(n.domain, n.manifest.logo_url), e
							}, new Map)
						}, [l]),
						f = (0, d.useMemo)(function() {
							return 0 === i.length ? null : i.map(function(e) {
								if (e) {
									var n = o.get(e.url),
										t = c.get(n) || "";
									return (0, s.jsx)(nj, {
										title: e.title,
										description: e.description,
										url: e.url,
										imageUrl: e.imageUrl,
										metadataTitle: n,
										iconUrl: t,
										mini: u
									}, e.url)
								}
							})
						}, [i, u, c, o, ]);
					return 0 === i.length ? null : (0, s.jsx)(nq, {
						loop: !1,
						children: f
					})
				}),
				n$ = t(75310);

			function nW() {
				var e = (0, T.Z)(["\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n", "\n", "\n"]);
				return nW = function() {
					return e
				}, e
			}
			var nJ = d.memo(function(e) {
				var n, t = e.message,
					r = e.isEditing,
					a = e.format,
					o = e.isCompletionInProgress,
					l = e.className,
					u = e.onSandboxLinkClick,
					c = e.isCompletion,
					d = (0, i.Z)(e, ["message", "isEditing", "format", "isCompletionInProgress", "className", "onSandboxLinkClick", "isCompletion"]);
				return r ? (0, s.jsx)(ng, (0, v.Z)({
					currentLeaf: t.nodeId,
					initialText: Y.Cv.getTextFromMessage(t.message),
					role: Y.Cv.getRoleFromMessage(t.message)
				}, d)) : (0, s.jsx)(nK, {
					text: Y.Cv.getTextFromMessage(t.message),
					errCode: t.errCode,
					err: t.err,
					flag: t.errType,
					isCompletionInProgress: o,
					format: a,
					className: l,
					showContentPolicyViolation: t.errCode === G.Dd,
					citations: null === (n = t.message.metadata) || void 0 === n ? void 0 : n.citations,
					isCompletion: c,
					onSandboxLinkClick: u
				})
			});

			function nK(e) {
				var n, t, r, a, o, i, l, u, c, f, m = e.citations,
					h = e.className,
					g = e.err,
					x = e.flag,
					p = e.format,
					v = e.isCompletionInProgress,
					b = e.showContentPolicyViolation,
					y = e.size,
					j = e.text,
					w = e.onSandboxLinkClick,
					C = e.isCompletion,
					k = (t = (n = {
							text: j,
							isCompletionInProgress: v
						})
						.text, r = n.isCompletionInProgress, o = (a = (0, $.hz)())
						.has("tools3"), i = a.has("tools3_dev"), l = nU(), u = (0, d.useMemo)(function() {
							return Array.from(l)
								.reduce(function(e, n) {
									var t = np.get(n.domain);
									return t && e.set(t, n.domain), e
								}, new Map)
						}, [l]), c = (0, d.useMemo)(function() {
							if (r) return !1;
							var e = t.match(nG);
							return new Set(e)
						}, [r, t]), f = (0, d.useMemo)(function() {
							if (c) {
								var e = Array.from(c)
									.reduce(function(e, n) {
										var t = np.get(new URL(n)
												.hostname),
											r = u.get(t);
										return (r || i && nV.has(t)) && e.set(n, r || t), e
									}, new Map);
								return e.size > 0 && e
							}
						}, [i, u, c]), !!o && f);
				return (0, s.jsxs)("div", {
					className: (0, E.Z)(h, "flex flex-col items-start gap-4 whitespace-pre-wrap", "danger" === x && "flex flex-row gap-2 text-red-500", "warning" === x && "text-orange-500"),
					children: [g && !j || b || !p ? "danger" === x && b ? null : j : (0, s.jsx)(n$.Z, {
						size: void 0 === y ? "medium" : y,
						className: (0, E.Z)("danger" !== x && v && "result-streaming", "danger" === x && "text-red-500", "warning" === x && "text-orange-500"),
						onSandboxLinkClick: w,
						children: "" === j ? "&#8203;" : (0, nf.Qd)(j, m)
					}), C && k && k.size > 0 && (0, s.jsx)(nH, {
						urlsToOpengraphTags: k
					}), x && (0, s.jsx)(nX, {
						$flag: x,
						children: b ? (0, s.jsx)(nY, {}) : g
					})]
				})
			}

			function nY() {
				return (0, s.jsxs)(s.Fragment, {
					children: ["This content may violate our", " ", (0, s.jsx)("a", {
						target: "_blank",
						href: "https://platform.openai.com/docs/usage-policies/content-policy",
						rel: "noreferrer",
						className: "bold underline",
						children: "content policy"
					}), ". If you believe this to be in error, please", " ", (0, s.jsx)("a", {
						target: "_blank",
						href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
						rel: "noreferrer",
						className: "bold underline",
						children: "submit your feedback"
					}), " ", "— your input will aid our research in this area."]
				})
			}
			var nX = O.Z.div(nW(), function(e) {
				return "warning" === e.$flag && "border-orange-500 bg-orange-500/10"
			}, function(e) {
				return "danger" === e.$flag && "border-red-500 bg-red-500/10"
			});

			function nQ(e) {
				var n = e.messages,
					t = e.isCompletionInProgress,
					r = e.isCompletion,
					a = n.reduce(function(e, n) {
						return n.err ? e : e + Y.Cv.getTextFromMessage(n.message)
					}, ""),
					o = n.filter(function(e) {
						return e.errCode === G.Dd
					}),
					i = o.some(function(e) {
						return "danger" === e.errType
					});
				return (0, s.jsx)(nK, {
					text: a,
					format: !0,
					isCompletion: r,
					flag: o.length > 0 && (i ? "danger" : "warning"),
					isCompletionInProgress: t,
					showContentPolicyViolation: o.length > 0
				})
			}

			function n0() {
				var e = (0, T.Z)(["w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100"]);
				return n0 = function() {
					return e
				}, e
			}

			function n1() {
				var e = (0, T.Z)(["flex flex-grow flex-col gap-3"]);
				return n1 = function() {
					return e
				}, e
			}

			function n2() {
				var e = (0, T.Z)(["text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0"]);
				return n2 = function() {
					return e
				}, e
			}

			function n3() {
				var e = (0, T.Z)(["w-[30px] flex flex-col relative items-end"]);
				return n3 = function() {
					return e
				}, e
			}

			function n4() {
				var e = (0, T.Z)(["p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"]);
				return n4 = function() {
					return e
				}, e
			}

			function n6() {
				var e = (0, T.Z)(["text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-3 md:gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n", ""]);
				return n6 = function() {
					return e
				}, e
			}

			function n5() {
				var e = (0, T.Z)(["text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs"]);
				return n5 = function() {
					return e
				}, e
			}
			var n8, n7 = e_()(function() {
					return t.e(328)
						.then(t.bind(t, 63328))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [63328]
						}
					},
					ssr: !1
				}),
				n9 = e_()(function() {
					return t.e(736)
						.then(t.bind(t, 98736))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [98736]
						}
					},
					ssr: !1
				}),
				te = e_()(function() {
					return t.e(24)
						.then(t.bind(t, 6024))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [6024]
						}
					},
					ssr: !1
				}),
				tn = e_()(function() {
					return t.e(672)
						.then(t.bind(t, 37672))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [37672]
						}
					},
					ssr: !1
				}),
				tt = e_()(function() {
					return t.e(201)
						.then(t.bind(t, 20201))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [20201]
						}
					},
					ssr: !1
				});

			function tr(e) {
				var n, t;
				return !(null === (n = e.message.recipient) || void 0 === n ? void 0 : n.includes(".")) && (null === (t = e.message.recipient) || void 0 === t ? void 0 : t.slice(2, 3)) === "n"
			}

			function ta(e) {
				var n, t, r;
				return !(null === (n = e.message.recipient) || void 0 === n ? void 0 : n.includes(".")) && ((null === (t = e.message.recipient) || void 0 === t ? void 0 : t.slice(2, 3)) === "o" || (null === (r = e.message.recipient) || void 0 === r ? void 0 : r.slice(2, 3)) === "s")
			}

			function to(e) {
				var n, t;
				return !("o" !== e.message.content.content_type.slice(1, 2) && ((null === (n = e.message.recipient) || void 0 === n ? void 0 : n.includes(".")) || (null === (t = e.message.recipient) || void 0 === t ? void 0 : t.slice(2, 3)) !== "t" || "text" !== e.message.content.content_type))
			}

			function ti(e) {
				return "e" === e.message.content.content_type.slice(2, 3)
			}

			function ts(e) {
				var n, t, r = (null === (n = e.message.author) || void 0 === n ? void 0 : n.name) || (null === (t = e.message.user) || void 0 === t ? void 0 : t.name);
				return !(null == r ? void 0 : r.includes(".")) && ((null == r ? void 0 : r.slice(2, 3)) === "n" || (null == r ? void 0 : r.slice(2, 3)) === "o" || (null == r ? void 0 : r.slice(2, 3)) === "s")
			}

			function tl(e) {
				var n;
				return Y.Cv.getRoleFromMessage(e.message) === V.uU.Assistant && (null === (n = e.message.recipient) || void 0 === n ? void 0 : n.includes("."))
			}

			function tu(e) {
				return Y.Cv.getRoleFromMessage(e.message) === V.uU.Tool && !ts(e) && !ti(e)
			}(n8 = o || (o = {}))[n8.Text = 0] = "Text", n8[n8.MultiText = 1] = "MultiText", n8[n8.SB = 2] = "SB", n8[n8.B = 3] = "B", n8[n8.C = 4] = "C", n8[n8.CEO = 5] = "CEO", n8[n8.P = 6] = "P";
			var tc = d.memo(function(e) {
					var n = e.turn,
						t = e.threadId,
						r = e.treeRef,
						a = e.onChangeItemInView,
						i = e.onChangeRating,
						l = (e.onCreateNewNode, e.onDeleteNode),
						u = e.onRequestCompletion,
						c = e.onUpdateNode,
						f = e.onSandboxLinkClick,
						x = e.activeRequests,
						b = n.role,
						y = n.messages,
						j = n.variantIds,
						w = (0, d.useState)(y),
						C = w[0],
						k = w[1],
						Z = J.theme,
						N = Z.color,
						P = Z.icon,
						S = Z.activeColor,
						M = (0, z.kP)()
						.session,
						T = (0, K.lj)(),
						I = (0, h.WS)(),
						F = (0, d.useState)(!1),
						R = F[0],
						A = F[1],
						D = (0, d.useMemo)(function() {
							return j.findIndex(function(e) {
								return e === C[0].nodeId
							})
						}, [j, C]),
						L = b !== V.uU.User,
						q = C[C.length - 1],
						B = (0, d.useState)(q.rating),
						_ = B[0],
						U = B[1],
						O = (0, $.hz)(),
						G = (0, n_.Z)()
						.installedPlugins,
						H = (0, d.useCallback)(function() {
							1 === C.length && (I(b === V.uU.User ? g.s6.editPrompt : g.s6.editCompletion, {
								id: C[0].message.id,
								threadId: t
							}), A(!0))
						}, [C, I, b, t]),
						W = (0, d.useCallback)(function() {
							A(!1)
						}, []),
						X = (0, d.useCallback)(function(e) {
							i(q.nodeId, q.message.id, e), U(e)
						}, [q, i]);
					(0, d.useEffect)(function() {
						U(q.rating)
					}, [q]), (0, d.useEffect)(function() {
						k(y)
					}, [y]);
					var Q = (0, d.useMemo)(function() {
							return Y.Cv.getRequestIdFromConversationTurn(n)
						}, [n]),
						ee = "CompletionUpdated:".concat(C[C.length - 1].nodeId),
						en = (0, d.useCallback)(function(e, n) {
							var t = n.nodeId;
							k(function(e) {
								var n = [],
									a = !0,
									o = !1,
									i = void 0;
								try {
									for (var s, l = e[Symbol.iterator](); !(a = (s = l.next())
										.done); a = !0) {
										var u = s.value;
										if (u.nodeId === t) {
											var c = r.current.getNode(t);
											n.push((0, v.Z)({
												nodeId: t,
												parentId: c.parentId,
												message: c.message
											}, c.metadata))
										} else n.push(u)
									}
								} catch (d) {
									o = !0, i = d
								} finally {
									try {
										a || null == l.return || l.return()
									} finally {
										if (o) throw i
									}
								}
								return n
							})
						}, [r]);
					(0, d.useEffect)(function() {
						return PubSub.subscribe(ee, en),
							function() {
								PubSub.unsubscribe(ee)
							}
					}, [en, ee]);
					var et = (0, d.useMemo)(function() {
							return x.has(Q)
						}, [x, Q]),
						er = (0, d.useMemo)(function() {
							var e = !0,
								n = !1,
								t = void 0;
							try {
								for (var r, a = C[Symbol.iterator](); !(e = (r = a.next())
									.done); e = !0) {
									var o = r.value;
									if (o.errType) return o.errType
								}
							} catch (i) {
								n = !0, t = i
							} finally {
								try {
									e || null == a.return || a.return()
								} finally {
									if (n) throw t
								}
							}
							return !1
						}, [C]),
						ea = (0, d.useMemo)(function() {
							if (L) {
								var e, n, t = null === (e = r.current.getParentPromptNode(C[0].nodeId)) || void 0 === e ? void 0 : e.parentId,
									a = t && (null === (n = r.current.getNode(t)
										.message.metadata) || void 0 === n ? void 0 : n.model_slug),
									o = (null == C ? void 0 : C[0]) && Y.Cv.getModelFromMessage(null == C ? void 0 : C[0].message);
								if (o && a && o !== a) return "The previous model used in this conversation is unavailable. We've switched you to the latest default model"
							}
							return null
						}, [L, C, r]),
						eo = (0, d.useMemo)(function() {
							if (!O.has("tools") && !O.has("tools2") && !O.has("tools3")) return {
								avatarIcon: P,
								avatarColor: N
							};
							if (et && C.length > 0) {
								var e = C[C.length - 1];
								if (tr(e) || ta(e) || ts(e)) return {
									avatarIcon: "s",
									avatarColor: S
								};
								if (to(e) || ti(e)) return {
									avatarIcon: "c",
									avatarColor: S
								};
								if (tl(e) || tu(e)) {
									var n = tl(e) ? e.message.recipient : e.message.author.name,
										t = null == n ? void 0 : n.split(".")[0],
										r = G.find(function(e) {
											return e.manifest.name_for_model === t
										});
									return r ? {
										avatarPlugin: r
									} : {
										avatarIcon: "p",
										avatarColor: S
									}
								} else if (Y.Cv.getIsTextTypeFromMessage(e.message) && (Y.Cv.getTextFromMessage(e.message)
									.length > 0 || C.length > 1)) return {
									avatarIcon: "t",
									avatarColor: S
								}
							}
							return {
								avatarIcon: P,
								avatarColor: N
							}
						}, [O, et, C, P, N, S, G, ]),
						ei = eo.avatarIcon,
						es = eo.avatarColor,
						el = eo.avatarPlugin,
						eu = (0, d.useCallback)(function(e, n) {
							var t = r.current.getParentId(e);
							r.current.addNode(n, "", t, V.Jq.Prompt)
						}, [r]),
						ec = (0, d.useMemo)(function() {
							var e = [];
							return C.forEach(function(n, t) {
								var r = null == C ? void 0 : C[t - 1],
									a = r && (Y.Cv.getIsIncompleteFromMessage(r.message) || Y.Cv.getIsContinuedFromMessage(r.message)),
									i = Y.Cv.getIsContinuedFromMessage(n.message),
									s = Y.Cv.getIsTextTypeFromMessage(n.message) && Y.Cv.getTextFromMessage(n.message);
								if (a && i && s) {
									var l = e.pop();
									(null == l ? void 0 : l.type) === o.MultiText ? (l.messages.push(n), e.push(l)) : (null == l ? void 0 : l.type) === o.Text && e.push({
										type: o.MultiText,
										messages: [l.message, n]
									})
								} else if (tr(n) || ta(n) || ts(n)) {
									var u = e[e.length - 1];
									(null == u ? void 0 : u.type) === o.SB || (null == u ? void 0 : u.type) === o.B ? u.messages.push(n) : e.push({
										type: tr(n) ? o.SB : o.B,
										messages: [n]
									})
								} else if (tl(n) || tu(n)) {
									var c = e[e.length - 1];
									tu(n) && (null == c ? void 0 : c.type) === o.P ? c.messages.push(n) : e.push({
										type: o.P,
										messages: [n]
									})
								} else {
									var d = o.Text;
									to(n) ? d = o.C : ti(n) && (d = o.CEO), e.push({
										type: d,
										message: n
									})
								}
							}), e.map(function(n, r) {
								var i = r === e.length - 1;
								switch (n.type) {
									case o.Text:
										return (0, s.jsx)(nJ, {
											className: "min-h-[20px]",
											message: n.message,
											isEditing: R,
											format: L,
											isCompletionInProgress: i && et,
											onCreateEditNode: eu,
											threadId: t,
											onUpdateNode: c,
											onDeleteNode: l,
											onChangeItemInView: a,
											onRequestCompletion: u,
											onExitEdit: W,
											disabled: 0 !== x.size,
											onSandboxLinkClick: f,
											isCompletion: L
										}, n.message.nodeId);
									case o.MultiText:
										return (0, s.jsx)(nQ, {
											messages: n.messages,
											isCompletionInProgress: i && et,
											isCompletion: L
										}, r);
									case o.SB:
										if (!O.has("tools")) return null;
										return (0, s.jsx)(n7, {
											messages: n.messages
										}, n.messages[0].nodeId);
									case o.B:
										if (!O.has("tools")) return null;
										return (0, s.jsx)(n9, {
											messages: n.messages,
											isComplete: !i
										}, n.messages[0].nodeId);
									case o.C:
										if (!O.has("tools2")) return null;
										var d = e[r + 1],
											m = d && d.type === o.CEO ? d.message : void 0;
										return (0, s.jsx)(te, {
											message: n.message,
											outputMessage: m
										}, n.message.nodeId);
									case o.CEO:
										if (!O.has("tools2")) return null;
										return (0, s.jsx)(tn, {
											message: n.message,
											isCollapsed: !1
										}, n.message.nodeId);
									case o.P:
										if (!O.has("tools3")) return null;
										return (0, s.jsx)(tt, {
											messages: n.messages
										}, n.messages[0].nodeId);
									default:
										return null
								}
							})
						}, [C, R, L, et, eu, t, c, l, a, u, W, x.size, O, f, ]);
					return (0, s.jsxs)(td, {
						className: (0, E.Z)("group", L ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800"),
						children: [ea && (0, s.jsx)(tp, {
							children: ea
						}), (0, s.jsxs)(tm, {
							children: [(0, s.jsxs)(th, {
								children: [L ? el ? (0, s.jsx)(nt.Ph, {
									plugin: el,
									notice: er || void 0
								}) : (0, s.jsx)(nt.k$, {
									background: es || "",
									iconName: ei,
									notice: er || void 0
								}) : (0, s.jsx)(nt.Yt, {
									user: null == M ? void 0 : M.user,
									notice: er || void 0
								}), j.length > 1 && !T && (0, s.jsx)(nl, {
									currentPage: D,
									onChangeIndex: function(e) {
										return a(j[e])
									},
									length: j.length,
									className: "invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible"
								})]
							}), (0, s.jsxs)("div", {
								className: "relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]",
								children: [(0, s.jsx)(tf, {
									children: ec
								}), !L && 1 === C.length && !R && (0, s.jsx)(tx, {
									$hidden: 0 !== x.size,
									children: (0, s.jsx)(tg, {
										onClick: H,
										className: "md:invisible md:group-hover:visible",
										children: (0, s.jsx)(p.ZP, {
											icon: m.vPQ
										})
									})
								}), (0, s.jsxs)("div", {
									className: "flex justify-between",
									children: [j.length > 1 && T && (0, s.jsx)(nl, {
										currentPage: D,
										onChangeIndex: function(e) {
											return a(j[e])
										},
										length: j.length,
										className: "self-center pt-2"
									}), L && (0, s.jsxs)(tx, {
										$hidden: et,
										children: ["thumbsDown" !== _ && (0, s.jsx)(tg, {
											onClick: function() {
												return X("thumbsUp")
											},
											disabled: "thumbsUp" === _,
											className: (0, E.Z)("thumbsUp" === _ && "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"),
											children: (0, s.jsx)(p.ZP, {
												icon: m.fmn
											})
										}, "thumbsUp:".concat(q.nodeId)), "thumbsUp" !== _ && (0, s.jsx)(tg, {
											onClick: function() {
												return X("thumbsDown")
											},
											disabled: "thumbsDown" === _,
											className: (0, E.Z)("thumbsDown" === _ && "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"),
											children: (0, s.jsx)(p.ZP, {
												icon: m.oLd
											})
										}, "thumbsDown:".concat(q.nodeId))]
									})]
								})]
							})]
						})]
					})
				}),
				td = O.Z.div(n0()),
				tf = O.Z.div(n1()),
				tm = O.Z.div(n2()),
				th = O.Z.div(n3()),
				tg = O.Z.button(n4()),
				tx = O.Z.div(n6(), function(e) {
					return e.$hidden ? "invisible" : "visible"
				}),
				tp = O.Z.div(n5()),
				tv = t(20212),
				tb = t(44819),
				ty = e_()(function() {
					return t.e(49)
						.then(t.bind(t, 10049))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [10049]
						}
					},
					ssr: !1
				});

			function tj(e) {
				var n, t = e.onChangeModelSetting,
					r = e.availableModels,
					a = e.modelBackend,
					o = (0, $.hz)(),
					i = (0, d.useMemo)(function() {
						return r.find(function(e) {
							return e.id === a
						})
					}, [r, a]);
				return (0, s.jsxs)("div", {
					className: "flex items-center justify-center gap-2",
					children: [(0, s.jsx)(tw, {
						onChangeModelSetting: t,
						availableModels: r,
						modelBackend: a
					}), o.has("tools3") && (null == i ? void 0 : null === (n = i.enabledTools) || void 0 === n ? void 0 : n.includes("tools3")) && (0, s.jsx)(ty, {})]
				})
			}

			function tw(e) {
				var n = e.onChangeModelSetting,
					t = e.availableModels,
					r = e.modelBackend,
					a = (0, h.WS)(),
					o = (0, d.useCallback)(function(e) {
						n(tb.G3.Model, e.id), a(g.s6.toggleModel, {
							model: e.id
						})
					}, [a, n]),
					i = t.map(function(e) {
						return {
							value: e,
							title: e.title,
							description: e.description,
							tags: e.tags
						}
					}),
					l = i.find(function(e) {
						return e.value.id === r
					}) || i[0];
				return (0, s.jsx)(tv.ZP, {
					name: "Model",
					selectedOption: l,
					options: i,
					onChange: o
				})
			}
			var tC = function(e) {
					var n = e.modelBackend,
						t = e.availableModels,
						r = t.find(function(e) {
							return e.id === n
						}) || t[0],
						a = r.tags.filter(function(e) {
							return tv.D2.includes(e)
						})
						.map(function(e) {
							return (0, tv.Vp)(e)
						});
					return (0, s.jsxs)("div", {
						className: "flex w-full items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300",
						children: ["Model: ", r.title, a]
					})
				},
				tk = t(75318);

			function tZ() {
				var e = (0, T.Z)(["text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100"]);
				return tZ = function() {
					return e
				}, e
			}

			function tN() {
				var e = (0, T.Z)(["text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center"]);
				return tN = function() {
					return e
				}, e
			}

			function tP() {
				var e = (0, T.Z)(["md:flex items-start text-center gap-3.5"]);
				return tP = function() {
					return e
				}, e
			}

			function tS() {
				var e = (0, T.Z)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
				return tS = function() {
					return e
				}, e
			}

			function tM() {
				var e = (0, T.Z)(["flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"]);
				return tM = function() {
					return e
				}, e
			}

			function tT() {
				var e = (0, T.Z)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
				return tT = function() {
					return e
				}, e
			}

			function tI() {
				var e = (0, T.Z)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
				return tI = function() {
					return e
				}, e
			}

			function tF() {
				var e = (0, T.Z)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']"]);
				return tF = function() {
					return e
				}, e
			}

			function tR() {
				var e = (0, T.Z)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"]);
				return tR = function() {
					return e
				}, e
			}
			var tA = O.Z.div(tZ()),
				tD = O.Z.h1(tN()),
				tE = O.Z.div(tP()),
				tL = O.Z.div(tS()),
				tq = O.Z.h2(tM()),
				tB = O.Z.ul(tT()),
				t_ = O.Z.li(tI());
			O.Z.li(tF());
			var tU = O.Z.button(tR());

			function tO(e) {
				var n = e.text,
					t = e.onChangeCurrentPrompt,
					r = (0, d.useCallback)(function() {
						t(n)
					}, [n, t]);
				return (0, s.jsxs)(tU, {
					onClick: r,
					children: ['"', n, '" →']
				})
			}

			function tz(e) {
				var n = e.onChangeCurrentPrompt,
					t = (0, $.nR)();
				return (0, s.jsxs)(tA, {
					children: [(0, s.jsxs)(tD, {
						children: ["ChatGPT", t && (0, s.jsx)(nn, {
							children: "Plus"
						})]
					}), (0, s.jsxs)(tE, {
						children: [(0, s.jsxs)(tL, {
							children: [(0, s.jsxs)(tq, {
								children: [(0, s.jsx)(p.ZP, {
									icon: m.kXG,
									size: "medium"
								}), "Examples"]
							}), (0, s.jsxs)(tB, {
								children: [(0, s.jsx)(tO, {
									text: "Explain quantum computing in simple terms",
									onChangeCurrentPrompt: n
								}), (0, s.jsx)(tO, {
									text: "Got any creative ideas for a 10 year old’s birthday?",
									onChangeCurrentPrompt: n
								}), (0, s.jsx)(tO, {
									text: "How do I make an HTTP request in Javascript?",
									onChangeCurrentPrompt: n
								})]
							})]
						}), (0, s.jsxs)(tL, {
							children: [(0, s.jsxs)(tq, {
								children: [(0, s.jsx)(p.ZP, {
									icon: tk.Z,
									size: "medium"
								}), "Capabilities"]
							}), (0, s.jsxs)(tB, {
								children: [(0, s.jsx)(t_, {
									children: "Remembers what user said earlier in the conversation"
								}), (0, s.jsx)(t_, {
									children: "Allows user to provide follow-up corrections"
								}), (0, s.jsx)(t_, {
									children: "Trained to decline inappropriate requests"
								})]
							})]
						}), (0, s.jsxs)(tL, {
							children: [(0, s.jsxs)(tq, {
								children: [(0, s.jsx)(p.ZP, {
									icon: m.BJv,
									size: "medium"
								}), "Limitations"]
							}), (0, s.jsxs)(tB, {
								children: [(0, s.jsx)(t_, {
									children: "May occasionally generate incorrect information"
								}), (0, s.jsx)(t_, {
									children: "May occasionally produce harmful instructions or biased content"
								}), (0, s.jsx)(t_, {
									children: "Limited knowledge of world and events after 2021"
								})]
							})]
						})]
					})]
				})
			}

			function tG() {
				var e = (0, T.Z)(["flex flex-col items-center text-sm  dark:bg-gray-800"]);
				return tG = function() {
					return e
				}, e
			}

			function tV() {
				var e = (0, T.Z)(["w-full h-32 md:h-48 flex-shrink-0"]);
				return tV = function() {
					return e
				}, e
			}

			function tH() {
				var e = (0, T.Z)(["cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200"]);
				return tH = function() {
					return e
				}, e
			}

			function t$() {
				var e = (0, T.Z)(["px-2 py-10 relative w-full flex flex-col h-full"]);
				return t$ = function() {
					return e
				}, e
			}

			function tW() {
				var e = (0, T.Z)(["text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow"]);
				return tW = function() {
					return e
				}, e
			}

			function tJ(e) {
				var n = e.conversationTurns,
					t = e.onChangeItemInView,
					r = e.onCreateNewNode,
					a = e.onUpdateNode,
					o = e.onChangeRating,
					i = e.onDeleteNode,
					l = e.onRequestCompletion,
					u = e.onChangeCurrentPrompt,
					c = e.onSandboxLinkClick,
					f = e.threadId,
					h = e.treeRef,
					g = e.activeRequests,
					x = e.isProcessingArtifact,
					v = e.isLoading,
					b = e.onChangeModelSetting,
					y = e.availableModels,
					j = e.currentThreadModel,
					w = e.canShowThreadSettings,
					C = (0, e9.useScrollToBottom)(),
					k = (0, ee.Z)((0, e9.useSticky)(), 1)[0],
					Z = (0, en.Z)(),
					N = n.length < 2,
					P = w && N && !v,
					S = (0, $.nR)(),
					M = (0, d.useState)(!1),
					T = M[0],
					I = M[1],
					F = (0, tb.ZP)(y, j)
					.modelBackend;
				return (0, d.useEffect)(function() {
					v ? setTimeout(function() {
						Z() && I(!0)
					}, 1e3) : I(!1)
				}, [v, Z]), (0, s.jsxs)(s.Fragment, {
					children: [P && (0, s.jsxs)(tQ, {
						children: [(0, s.jsx)(tj, {
							onChangeModelSetting: b,
							availableModels: y,
							modelBackend: F
						}), (0, s.jsxs)(t0, {
							children: ["ChatGPT", S && (0, s.jsx)(nn, {
								children: "Plus"
							})]
						})]
					}), (0, s.jsxs)(tK, {
						children: [N && !v && !w && (0, s.jsx)(tz, {
							onChangeCurrentPrompt: u
						}), T && v && (0, s.jsx)(eo.Z, {
							className: "mx-auto mt-4"
						}), !N && !v && w && (0, s.jsx)(tC, {
							availableModels: y,
							modelBackend: F
						}), n.map(function(e, n) {
							return e.role === V.uU.Unknown || e.role === V.uU.System ? null : (0, s.jsx)(tc, {
								turn: e,
								threadId: f,
								treeRef: h,
								onChangeItemInView: t,
								onChangeRating: o,
								onCreateNewNode: r,
								onDeleteNode: i,
								onRequestCompletion: l,
								onUpdateNode: a,
								onSandboxLinkClick: c,
								activeRequests: g
							}, n)
						}), !P && (0, s.jsx)(tY, {})]
					}), x && (0, s.jsx)(eo.Z, {
						className: "mx-auto mt-4"
					}), !k && (0, s.jsx)(tX, {
						onClick: C,
						children: (0, s.jsx)(p.ZP, {
							icon: m.tv1,
							className: "m-1"
						})
					})]
				})
			}
			var tK = O.Z.div(tG()),
				tY = O.Z.div(tV()),
				tX = O.Z.button(tH()),
				tQ = O.Z.div(t$()),
				t0 = O.Z.h1(tW()),
				t1 = e_()(function() {
					return Promise.resolve()
						.then(t.bind(t, 1215))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [1215]
						}
					},
					ssr: !1
				});

			function t2(e) {
				var n = e.children;
				return (0, s.jsx)(t1, {
					className: (0, E.Z)("h-full dark:bg-gray-800"),
					followButtonClassName: "scroll-convo",
					initialScrollBehavior: "auto",
					children: n
				})
			}

			function t3() {
				var e = (0, T.Z)(["flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]"]);
				return t3 = function() {
					return e
				}, e
			}

			function t4() {
				var e = (0, T.Z)(["w-10 text-2xl text-center"]);
				return t4 = function() {
					return e
				}, e
			}

			function t6() {
				var e = (0, T.Z)(["flex-1 leading-5"]);
				return t6 = function() {
					return e
				}, e
			}

			function t5() {
				var e = (0, T.Z)(["flex gap-4 mt-6"]);
				return t5 = function() {
					return e
				}, e
			}

			function t8(e) {
				var n = e.icon,
					t = e.children;
				return (0, s.jsxs)(t7, {
					children: [(0, s.jsx)(t9, {
						children: n
					}), (0, s.jsx)(re, {
						children: t
					})]
				})
			}
			var t7 = O.Z.div(t3()),
				t9 = O.Z.div(t4()),
				re = O.Z.div(t6());

			function rn(e) {
				var n = e.onBack,
					t = e.onNext,
					r = e.onSubmit;
				return (0, s.jsxs)(rt, {
					children: [n && (0, s.jsx)(ea.z, {
						as: "button",
						color: "neutral",
						onClick: n,
						children: "Back"
					}), t && (0, s.jsx)(ea.z, {
						as: "button",
						onClick: t,
						color: "neutral",
						className: "ml-auto",
						children: "Next"
					}), r && (0, s.jsx)(ea.z, {
						as: "button",
						onClick: r,
						color: "primary",
						className: "ml-auto",
						children: "Done"
					})]
				})
			}
			var rt = O.Z.div(t5());

			function rr() {
				var e = (0, T.Z)(["prose dark:prose-invert"]);
				return rr = function() {
					return e
				}, e
			}

			function ra() {
				var e = (0, T.Z)(["!mt-4 font-normal !mb-2"]);
				return ra = function() {
					return e
				}, e
			}

			function ro() {
				var e = (0, T.Z)(["mb-4"]);
				return ro = function() {
					return e
				}, e
			}

			function ri() {
				var e = (0, T.Z)(["w-full h-[1px] bg-gray-300 opacity-20"]);
				return ri = function() {
					return e
				}, e
			}

			function rs() {
				var e = (0, T.Z)(["flex gap-4 flex-col text-sm"]);
				return rs = function() {
					return e
				}, e
			}
			var rl = "oai/apps/hasSeenOnboarding",
				ru = J.id,
				rc = J.name,
				rd = function() {
					var e = (0, d.useCallback)(function() {
							x.m.setItem("".concat(rl, "/")
								.concat(ru), new Date()
								.toLocaleDateString("en-CA", {
									year: "numeric",
									month: "2-digit",
									day: "2-digit"
								}))
						}, []),
						n = (0, d.useState)(null),
						t = n[0],
						r = n[1];
					(0, d.useEffect)(function() {
						r(x.m.getItem("".concat(rl, "/")
							.concat(ru)))
					}, [r]);
					var a = (0, d.useCallback)(function() {
						return t ? new Date(!0 === t ? "2022-12-14" : t) : t
					}, [t]);
					return (0, d.useMemo)(function() {
						return {
							setHasSeenOnboarding: e,
							getHasSeenOnboardingDate: a
						}
					}, [a, e])
				};

			function rf(e) {
				var n = e.onClose,
					t = rd()
					.setHasSeenOnboarding,
					r = (0, d.useState)(0),
					a = r[0],
					o = r[1],
					i = (0, d.useCallback)(function() {
						n(!0), t()
					}, [n, t]);
				return (0, s.jsxs)(rp, {
					children: [0 === a && (0, s.jsx)(rh, {
						onChangePage: o
					}), 1 === a && (0, s.jsx)(rg, {
						onChangePage: o
					}), 2 === a && (0, s.jsx)(rx, {
						onChangePage: o,
						onSubmit: i
					})]
				})
			}
			var rm = function() {
					return "chat" === ru ? (0, s.jsxs)(s.Fragment, {
						children: [(0, s.jsx)("div", {
							className: "mb-5",
							children: (0, s.jsx)(rv, {
								children: (0, s.jsx)("b", {
									children: rc
								})
							})
						}), (0, s.jsx)(ry, {})]
					}) : (0, s.jsxs)(s.Fragment, {
						children: [(0, s.jsxs)(rv, {
							children: ["Welcome to ", (0, s.jsx)("b", {
								children: rc
							})]
						}), (0, s.jsx)("p", {
							children: "Here are a few things to keep in mind before we get started:"
						}), (0, s.jsx)(ry, {})]
					})
				},
				rh = function(e) {
					var n = e.onChangePage;
					return (0, s.jsxs)(s.Fragment, {
						children: [(0, s.jsx)(rm, {}), (0, s.jsx)(rb, {
							children: "This is a free research preview."
						}), (0, s.jsxs)(rj, {
							children: [(0, s.jsx)(t8, {
								icon: "\uD83D\uDD2C",
								children: "Our goal is to get external feedback in order to improve our systems and make them safer."
							}), (0, s.jsx)(t8, {
								icon: "\uD83D\uDEA8",
								children: "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice."
							})]
						}), (0, s.jsx)(rn, {
							onNext: function() {
								return n(1)
							}
						})]
					})
				},
				rg = function(e) {
					var n = e.onChangePage;
					return (0, s.jsxs)(s.Fragment, {
						children: [(0, s.jsx)(rm, {}), (0, s.jsx)(rb, {
							children: "How we collect data"
						}), (0, s.jsxs)(rj, {
							children: [(0, s.jsx)(t8, {
								icon: "\uD83E\uDDBE",
								children: "Conversations may be reviewed by our AI trainers to improve our systems."
							}), (0, s.jsx)(t8, {
								icon: "\uD83D\uDD10",
								children: "Please don't share any sensitive information in your conversations."
							})]
						}), (0, s.jsx)(rn, {
							onBack: function() {
								return n(0)
							},
							onNext: function() {
								return n(2)
							}
						})]
					})
				},
				rx = function(e) {
					var n = e.onChangePage,
						t = e.onSubmit,
						r = (0, d.useRef)(null);
					return (0, s.jsxs)(s.Fragment, {
						children: [(0, s.jsx)(rm, {}), (0, s.jsx)(rb, {
							children: "We'd love your feedback!"
						}), (0, s.jsxs)(rj, {
							children: [(0, s.jsx)(t8, {
								icon: "\uD83D\uDC4D",
								children: "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful."
							}), (0, s.jsxs)(t8, {
								icon: "\uD83D\uDCAC",
								children: ["Share your feedback in our", " ", (0, s.jsx)("a", {
									href: "https://discord.gg/openai",
									target: "_blank",
									rel: "noreferrer",
									children: "Discord server"
								}), "."]
							})]
						}), (0, s.jsx)(rn, {
							onBack: function() {
								return n(1)
							},
							onSubmit: function() {
								return null == t ? void 0 : t(r)
							}
						})]
					})
				},
				rp = O.Z.div(rr()),
				rv = O.Z.h2(ra()),
				rb = O.Z.h4(ro()),
				ry = O.Z.div(ri()),
				rj = O.Z.div(rs()),
				rw = t(74516),
				rC = t(35e3),
				rk = t(69858),
				rZ = t(77507);

			function rN(e) {
				var n = e.isOpen,
					t = e.onClose,
					r = (0, d.useRef)(null),
					a = (0, h.WS)(),
					o = (0, d.useState)(!1),
					i = o[0],
					l = o[1],
					u = (0, c.useRouter)(),
					f = (0, d.useCallback)(function() {
						a(g.s6.closeAccountPaymentModal), t()
					}, [t, a]),
					x = (0, d.useCallback)((0, S.Z)(function() {
						var e;
						return (0, R.__generator)(this, function(n) {
							switch (n.label) {
								case 0:
									l(!0), a(g.s6.clickAccountCustomerPortal), n.label = 1;
								case 1:
									return n.trys.push([1, 3, 4, 5]), [4, H.ZP.fetchCustomerPortalUrl()];
								case 2:
									return e = n.sent(), u.push(e.url), [3, 5];
								case 3:
									return n.sent(), rw.m.warning("The account management page encountered an error. Please try again. If the problem continues, please email support@openai.com.", {
										hasCloseButton: !0
									}), [3, 5];
								case 4:
									return l(!1), [7];
								case 5:
									return [2]
							}
						})
					}), [u, a, l]);
				return (0, s.jsxs)(rC.x, {
					isOpen: n,
					onClose: t,
					focusRef: r,
					children: [(0, s.jsxs)("div", {
						className: "flex w-full flex-row items-center justify-between border-b py-3 px-4 dark:border-gray-700",
						children: [(0, s.jsx)("span", {
							className: "text-base font-semibold sm:text-base",
							children: "Contact Us"
						}), (0, s.jsx)("button", {
							className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
							onClick: f,
							children: (0, s.jsx)(m.q5L, {
								className: "h-6 w-6"
							})
						})]
					}), (0, s.jsx)("div", {
						className: "grid",
						children: (0, s.jsx)("div", {
							className: "relative order-1 col-span-1 sm:order-2",
							children: (0, s.jsx)(rk.Oi, {
								rowElements: [(0, s.jsx)(rk.Cu, {
									text: rZ.S.plus.name,
									children: (0, s.jsx)("span", {
										className: "font-semibold text-gray-500",
										children: rZ.S.plus.costInDollars
									})
									console.log("rZ.S.plus.name"+rZ.S.plus.name);
								}, "row-plus-plan-name"), (0, s.jsx)(rk.hi, {
									disabled: !0,
									variant: "primary-disabled",
									ref: r,
									text: rZ.S.plus.callToAction.active
								}, "row-plus-plan-button"), (0, s.jsx)(rk.G, {
									text: rZ.S.plus.demandAccess
								}, "row-plus-plan-demand"), (0, s.jsx)(rk.G, {
									text: rZ.S.plus.responseSpeed
								}, "row-plus-plan-speed"), (0, s.jsx)(rk.G, {
									className: "sm:pb-1",
									text: rZ.S.plus.modelFeatures
								}, "row-plus-plan-feathers"), (0, s.jsx)(rk.nR, {
									className: "sm:pb-1",
									isLoading: i,
									text: rZ.S.manageSubscription.callToAction,
									onClick: x
								}, "row-plus-plan-manage"), ]
							})
						})
					})]
				})
			}
			var rP = t(86885),
				rS = t(35873),
				rM = t(77064);

			function rT() {
				var e = (0, T.Z)(["h-[37px] py-2.5 px-6 text-xs uppercase text-gray-700 font-medium border-y relative"]);
				return rT = function() {
					return e
				}, e
			}

			function rI() {
				var e = (0, T.Z)(["relative py-1 px-6 text-xs uppercase text-gray-700 font-medium bg-gray-100 border-y"]);
				return rI = function() {
					return e
				}, e
			}
			O.Z.h3(rT());
			var rF = O.Z.h3(rI());

			function rR() {
				var e = (0, T.Z)(["overflow-y-auto h-full"]);
				return rR = function() {
					return e
				}, e
			}

			function rA() {
				var e = (0, T.Z)(["whitespace-pre-wrap text-sm"]);
				return rA = function() {
					return e
				}, e
			}

			function rD() {
				var e = (0, T.Z)(["px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-black/10 border-gray-200"]);
				return rD = function() {
					return e
				}, e
			}

			function rE() {
				var e = (0, T.Z)(["absolute top-1/2 -translate-y-1/2 right-6"]);
				return rE = function() {
					return e
				}, e
			}

			function rL(e) {
				var n = e.treeRef,
					t = e.currentLeafId,
					r = (0, d.useState)(),
					a = r[0],
					o = r[1],
					i = (0, d.useMemo)(function() {
						return n.current.getBranchFromLeaf(t)
							.filter(function(e) {
								return e.type !== V.Jq.Root
							})
							.map(function(e) {
								return e.message
							})
					}, [n, t]),
					l = (0, d.useCallback)(function() {
						o(void 0)
					}, []),
					u = (0, d.useCallback)(function() {
						navigator.clipboard.writeText(n.current.getTextFromThread(t))
					}, [n, t]),
					c = i.map(function(e, n) {
						var t = Y.Cv.getRoleFromMessage(e),
							r = Y.Cv.getNameFromMessage(e);
						return (0, s.jsxs)(r_, {
							role: "button",
							onClick: function() {
								return o(n)
							},
							children: [(0, s.jsxs)("div", {
								className: "text-xs font-medium uppercase text-gray-400",
								children: [t, t !== r && " (".concat(r, ")"), " -> ", Y.Cv.getRecipientFromMessage(e)]
							}), (0, s.jsx)("div", {
								children: Y.Cv.getTextFromMessage(e)
							})]
						}, e.id)
					});
				return (0, s.jsxs)(s.Fragment, {
					children: [(0, s.jsxs)(rq, {
						children: [(0, s.jsxs)(rF, {
							children: ["Conversation messages", (0, s.jsx)(rU, {
								children: (0, s.jsx)(rM.$, {
									label: (0, s.jsx)(rM.u, {
										text: "Copy conversation text to clipboard"
									}),
									children: (0, s.jsx)(rS.Z, {
										onCopy: u
									})
								})
							})]
						}), (0, s.jsx)(rB, {
							children: c
						})]
					}), void 0 !== a && (0, s.jsx)(f.Z, {
						isOpen: !0,
						onModalClose: l,
						type: "success",
						children: (0, s.jsx)("pre", {
							className: "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
							children: JSON.stringify(i[a], null, 2)
						})
					}, "DebugMessageModal-".concat(a))]
				})
			}
			var rq = O.Z.div(rR()),
				rB = O.Z.pre(rA()),
				r_ = O.Z.div(rD()),
				rU = O.Z.div(rE()),
				rO = t(30331),
				rz = t(87762),
				rG = t(32329),
				rV = t(89678),
				rH = t.n(rV),
				r$ = t(39400),
				rW = [/\bnigger\w*/i, /\bfaggot\w*/i, /\bkike\w*/i, /\bdykes?\b/i, /\bwetbacks?\b/i, /\bchinks?\b/i, /\bgooks?\b/i, /\bpakis?\b/i, /\binjuns?\b/i, /\btrannys?\b/i, /\btrannies\b/i, /\bspicks?\b/i, /\bshemales?\b/i, ];

			function rJ() {
				var e = (0, T.Z)(["overflow-hidden w-full h-full relative"]);
				return rJ = function() {
					return e
				}, e
			}

			function rK() {
				var e = (0, T.Z)(["relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch"]);
				return rK = function() {
					return e
				}, e
			}

			function rY() {
				var e = (0, T.Z)(["grow flex-1 overflow-hidden"]);
				return rY = function() {
					return e
				}, e
			}

			function rX() {
				var e = (0, T.Z)(["absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient"]);
				return rX = function() {
					return e
				}, e
			}
			var rQ = "oai/apps/hasSeenHistoryRestored",
				r0 = J.href,
				r1 = function(e) {
					var n, r, a, o, l, y, j, C, k, Z, N, P, T, L, B, O, J, Q, ee, en, et, er, ea, eo, ei, es, el, eu, ec, ed, ef, em, eh, ex, ep, ev, eb, ey, ej, ew, eC, ek, eZ, eN = e.initialData,
						eP = e.features,
						eS = e.isLoading,
						eM = (0, c.useRouter)(),
						eT = (0, K.dD)(),
						eI = (0, h.WS)(),
						eR = (0, rG.n)(),
						eA = (0, d.useState)(),
						eD = eA[0],
						eB = eA[1],
						e_ = (0, d.useState)(),
						eU = e_[0],
						eO = e_[1],
						ez = (0, d.useRef)(null),
						eG = (0, d.useRef)(eN.threadId || ""),
						eV = (0, $.nR)(),
						eH = (0, W.g)(function(e) {
							return e.flags.isUserInCanPayGroup
						}),
						e$ = (0, z.kP)()
						.session,
						eW = null == e$ ? void 0 : e$.accessToken,
						eJ = (o = (a = {
								enabled: Boolean(H.ZP.accessToken || eW),
								accessToken: H.ZP.accessToken || eW
							})
							.enabled, l = a.accessToken, C = (j = (0, r$.N)({
								queryKey: ["conversations"],
								queryFn: function(e) {
									var n = e.pageParam;
									return H.ZP.getConversations(n || 0, 20, H.ZP.accessToken || l)
								},
								getNextPageParam: function(e) {
									var n = e.offset + e.limit;
									return n < e.total ? n : void 0
								},
								enabled: o
							}))
							.data, k = j.fetchNextPage, Z = j.hasNextPage, N = j.refetch, P = j.isInitialLoading, T = j.isError, (0, d.useMemo)(function() {
								return {
									conversations: null == C ? void 0 : C.pages.reduce(function(e, n) {
										if (n) {
											var t = n.items;
											e.push.apply(e, (0, I.Z)(void 0 === t ? [] : t))
										}
										return e
									}, []),
									hasNextPage: Z,
									fetchNextPage: k,
									refetch: function() {
										return o && N()
									},
									isLoading: P,
									isError: o && T
								}
							}, [null == C ? void 0 : C.pages, o, k, Z, T, P, N, ])),
						eK = eJ.conversations,
						eY = eJ.hasNextPage,
						eX = eJ.fetchNextPage,
						eQ = eJ.refetch,
						e0 = eJ.isLoading,
						e1 = eJ.isError,
						e3 = (0, d.useState)(!1),
						e4 = e3[0],
						e6 = e3[1],
						e5 = (B = (L = {
								exempt: !1,
								onRestrictedTermFound: (0, d.useCallback)(function(e) {
									e6(!0), eI(g.s6.promptUsedRestrictedWords, {
										threadId: eG.current,
										content: e
									})
								}, [eI])
							})
							.exempt, O = L.onRestrictedTermFound, Q = (J = (0, d.useState)(!1))[0], ee = J[1], {
								hasRestrictedTerms: Q,
								checkRestrictedTerms: (0, d.useCallback)(function(e) {
									var n;
									return (rW.some(function(t) {
										var r = t.exec(e);
										return r && (n = r[0]), r
									}), !B && n) ? (ee(!0), null == O || O(n), !0) : (ee(!1), !1)
								}, [B, O])
							}),
						e9 = e5.hasRestrictedTerms,
						ne = e5.checkRestrictedTerms,
						nn = (0, d.useState)(!0),
						nt = nn[0],
						nr = nn[1],
						na = (0, d.useState)(!1),
						no = na[0],
						ni = na[1],
						ns = (0, d.useState)(!1),
						nl = ns[0],
						nu = ns[1],
						nc = (0, d.useState)(!1),
						nd = nc[0],
						nf = nc[1],
						nm = (en = (0, z.kP)()
							.session, et = (0, rz.a)(["models"], function() {
								return H.ZP.getModels(null == en ? void 0 : en.accessToken)
							}, {
								enabled: !!(null == en ? void 0 : en.accessToken),
								placeholderData: {
									models: [{
										slug: "text-davinci-002-render",
										max_tokens: 4097,
										title: "Default",
										description: "",
										tags: []
									}, ]
								},
								onError: function(e) {
									try {
										rO.Tb(e)
									} catch (n) {}
								}
							})
							.data, (0, d.useMemo)(function() {
								var e;
								return {
									availableModels: et ? (e = et.models)
										.map(function(e) {
											return {
												id: e.slug,
												maxTokens: e.max_tokens,
												title: e.title,
												description: e.description,
												tags: e.tags,
												enabledTools: e.enabled_tools
											}
										}) : []
								}
							}, [et]))
						.availableModels,
						nh = (0, nB.lt)()
						.enabledPluginIds,
						ng = (0, tb.ZP)(nm, eN.lastModelUsed),
						nx = ng.temperature,
						np = ng.modelBackend,
						nv = ng.onChangeModelSetting,
						nb = (0, d.useMemo)(function() {
							return nm.find(function(e) {
								return e.id === np
							})
						}, [nm, np]),
						ny = (0, d.useRef)(new Y.Cv(eN.thread)),
						nj = (0, d.useState)(eN.currentLeafId),
						nw = nj[0],
						nC = nj[1],
						nk = (0, d.useState)(!1),
						nZ = nk[0],
						nN = nk[1],
						nP = (0, d.useMemo)(function() {
							return {
								model: np
							}
						}, [np]),
						nS = (0, d.useState)(null),
						nM = nS[0],
						nT = nS[1],
						nI = (0, d.useState)({}),
						nF = nI[0],
						nR = nI[1],
						nA = (0, d.useState)(new Set),
						nD = nA[0],
						nE = nA[1],
						nL = (0, d.useCallback)(function(e) {
							nR(function(n) {
								return n[e], (0, i.Z)(n, [e].map(F.Z))
							})
						}, []),
						nq = (0, d.useCallback)(function() {
							eQ(), nO(""), nN(!1), eI(g.s6.newThread)
						}, [eI, eQ]),
						n_ = (0, d.useState)(""),
						nU = n_[0],
						nO = n_[1],
						nz = (0, d.useState)(""),
						nG = nz[0],
						nV = nz[1],
						nH = nG || nU || eN.title,
						n$ = (0, d.useCallback)(function(e) {
							H.ZP.generateTitle(eG.current, e, np)
								.then(function(e) {
									var n = e.title;
									nO(n), eI(g.s6.renameThread, {
										threadId: eG.current,
										content: n,
										model: np
									})
								})
								.catch(function(e) {
									console.error(e)
								})
						}, [eI, np]),
						nW = (er = eG, ed = eP.has("tools3") && (null == nb ? void 0 : null === (n = nb.enabledTools) || void 0 === n ? void 0 : n.includes("tools3")) ? Array.from(nh) : void 0, ef = eN.lastModelUsed, em = (0, $.hz)(), eh = (0, d.useId)(), ex = (0, h.WS)(), ep = (0, tb.ZP)(nm, ef)
							.modelBackend, ev = (0, d.useRef)(0), eb = (0, d.useRef)({}), ey = (0, d.useRef)(), (0, d.useEffect)(function() {
								function e() {
									return (e = (0, S.Z)(function() {
											return (0, R.__generator)(this, function(e) {
												switch (e.label) {
													case 0:
														return [4, t.e(554)
															.then(t.bind(t, 76554))
														];
													case 1:
														return ey.current = e.sent(), [2]
												}
											})
										}))
										.apply(this, arguments)
								}
								em.has("tools3_dev") && function() {
									e.apply(this, arguments)
								}()
							}, [em]), ej = (0, d.useCallback)(function(e, n, t) {
								var r, a = t.eventSource,
									o = function() {
										setTimeout(function() {
											nL(n), nE(function(e) {
												var t = new Set(e);
												return t.delete(n), t
											}), delete eb.current[n]
										}, 0)
									},
									i = ny.current,
									s = n,
									l = i.getParentId(s),
									u = "CompletionUpdated:".concat(n),
									c = "CompletionUpdated:".concat(l),
									d = e === V.Os.Continue,
									f = !0,
									m = !1,
									h = i.getMessage(s),
									x = i.getIsBlockedFromNode(l),
									p = !1,
									v = !1,
									b = rH()(function() {
										x || p || (i.updateNodeMessage(s, h), _()
											.publish(u, {
												nodeId: s
											}))
									}, 50, {
										leading: !0,
										maxWait: 50
									});

								function y(e, n, t) {
									return j.apply(this, arguments)
								}

								function j() {
									return (j = (0, S.Z)(function(e, n, t) {
											var r, a, o, s, l, d = arguments;
											return (0, R.__generator)(this, function(f) {
												switch (f.label) {
													case 0:
														r = d.length > 3 && void 0 !== d[3] && d[3], f.label = 1;
													case 1:
														return f.trys.push([1, 3, , 4]), [4, (0, G._I)(t, !1, er.current, i.getMessageId(n))];
													case 2:
														return o = (a = f.sent())
															.isBlocked, s = a.isFlagged, (o || s) && (v = !0), o ? (p = !0, r || (x = !0), i.updateNode(n, {
																	message: {
																		content: {
																			parts: {
																				$set: [""]
																			}
																		}
																	},
																	metadata: {
																		$set: G.sK
																	}
																}), _()
																.publish(r ? u : c, {
																	nodeId: n
																}), ex(r ? g.s6.completionBlockedByModeration : g.s6.promptBlockedByModeration, {
																	threadId: e,
																	id: n
																})) : s ? (i.updateNode(n, {
																	metadata: {
																		$set: G.Mf
																	}
																}), _()
																.publish(r ? u : c, {
																	nodeId: n
																}), ex(r ? g.s6.completionFlaggedByModeration : g.s6.promptFlaggedByModeration, {
																	threadId: e,
																	id: n
																})) : r && x && (i.updateNodeMessage(n, h), _()
																.publish(u, {
																	nodeId: n
																})), [3, 4];
													case 3:
														return l = f.sent(), p = !0, i.updateNode(n, {
																metadata: {
																	$set: {
																		err: "An error occured",
																		errType: "danger"
																	}
																}
															}), ex(g.s6.moderationError, {
																threadId: e,
																content: JSON.stringify(l || "")
															}), _()
															.publish(r ? u : c, {
																nodeId: n
															}), _()
															.publish("UnrecoverableError"), [3, 4];
													case 4:
														return [2]
												}
											})
										}))
										.apply(this, arguments)
								}
								return r = (0, S.Z)(function(t) {
										var r, c, j, w, C, k, Z, N, P, S, M, T, I, F, A, D, E, L, q;
										return (0, R.__generator)(this, function(R) {
											switch (R.label) {
												case 0:
													if (r = t.err, c = t.finish_reason, j = t.message, w = t.threadId, (r || !j) && !c) return r && console.error(r), C = (null == r ? void 0 : r.message) || "Something went wrong", i.updateNode(s, {
															message: {
																$set: h
															},
															metadata: {
																$set: {
																	err: C,
																	errType: "danger"
																}
															}
														}), _()
														.publish(u, {
															nodeId: s
														}), o(), [2];
													if (f && i.isFirstCompletion) {
														if ((null == j ? void 0 : null === (k = j.author) || void 0 === k ? void 0 : k.role) === V.uU.System) return i.appendSystemMessageToRoot(j), [2];
														if ((null == j ? void 0 : null === (Z = j.author) || void 0 === Z ? void 0 : Z.role) === V.uU.User) return [2]
													}
													if (f ? (f = !1, m = i.isFirstCompletion, w && (er.current = w), i.updateNodeMessage(s, j), m && nq(), d || y(er.current, l, i.getTextFromLastNTurns(l, 1), !1), ex(g.s6.generateCompletion, {
															id: n,
															threadId: w,
															completionType: e,
															eventSource: a,
															model: ep
														}), _()
														.publish("PublishAborter", {
															id: n,
															aborter: eb.current[n]
														})) : j && !d && j.id !== i.getMessageId(s) && (b.flush(), i.addNode(j.id, j, s, V.Jq.Completion), nC(s = j.id), u = "CompletionUpdated:".concat(s)), j && (h = j), b(), "stop" !== c || (x || p || (b.flush(), !v && m && n$(i.getMessageId(s))), N = Y.Cv.getTextFromMessage(h), P = i.getTextFromLastNTurns(l, 2) + "\n\n" + N, y(er.current, s, P, !0), p || _()
														.publish(u, {
															nodeId: s
														}), o(), !em.has("tools3_dev"))) return [3, 3];
													if (S = ey.current) return [3, 1];
													return console.error("Error loading tools3"), [3, 3];
												case 1:
													if (!(M = S.getLocalhostPluginHttpApiCallData(h))) return [3, 3];
													return [4, S.makeLocalhostPluginHttpApiCall(M)];
												case 2:
													T = R.sent(), I = s, F = !0, A = !1, D = void 0;
													try {
														for (E = T[Symbol.iterator](); !(F = (L = E.next())
															.done); F = !0) q = L.value, i.addNode(q.id, q, I, V.Jq.Completion), I = q.id
													} catch (B) {
														A = !0, D = B
													} finally {
														try {
															F || null == E.return || E.return()
														} finally {
															if (A) throw D
														}
													}
													nC(I), eC(V.Os.Next, I, {
														model: ep
													}, {}), R.label = 3;
												case 3:
													return [2]
											}
										})
									}),
									function(e) {
										return r.apply(this, arguments)
									}
							}, [ex, ep, nq, n$, nL, nE, nC, er, ny, ]), eC = (0, d.useCallback)((ew = (0, S.Z)(function(e, n, t, r) {
								var a, o, i, s, l, u, c, d;
								return (0, R.__generator)(this, function(t) {
									switch (t.label) {
										case 0:
											return a = ny.current, o = "request-".concat(eh, "-")
												.concat(ev.current++), nE(function(e) {
													var n = new Set(e);
													return n.add(o), n
												}), a.addNode(o, "", n, V.Jq.Completion), nC(o), s = [], l = a.getNode(n), e === V.Os.Next || e === V.Os.Variant ? (i = (null === (u = (c = a.getNode(l.parentId))
													.message) || void 0 === u ? void 0 : u.id) || c.id, s.push(l.message)) : i = l.message.id, [4, H.ZP.publicApiCompletionStream({
													model: ep,
													availableModels: nm,
													currentThreadModel: ef
												}, {
													completionType: e,
													threadId: er.current || void 0,
													parentMessageId: i,
													messages: s,
													enabledPluginIds: ed
												}, ej(e, o, r))];
										case 1:
											return d = t.sent(), eb.current[o] = d, [2]
									}
								})
							}), function(e, n, t, r) {
								return ew.apply(this, arguments)
							}), [ny, eh, ev, nE, nC, ep, nm, ed, ef, er, ej, ])),
						nJ = (0, d.useCallback)(function() {
							eM.replace({
								pathname: eM.basePath,
								query: {}
							}, void 0, {
								shallow: !0
							})
						}, [eM]),
						nK = (0, d.useCallback)(function() {
							if (nw) {
								var e = ny.current.getBranchFromLeaf(nw);
								nR(function(n) {
									var t = (0, v.Z)({}, n);
									return e.forEach(function(e) {
										e.id in t && (t[e.id].abort(), delete t[e.id])
									}), t
								}), nE(function(n) {
									var t = new Set(n);
									return e.forEach(function(e) {
										t.delete(e.id)
									}), t
								})
							}
						}, [nw]),
						nY = (0, d.useCallback)((ek = (0, S.Z)(function(e, n, t, r) {
							return (0, R.__generator)(this, function(a) {
								return r && nK(), e !== V.Os.Continue && ne(ny.current.getTextFromNode(n)) || (eR(eG.current), nW(e, n, nP, t)), [2]
							})
						}), function(e, n, t, r) {
							return ek.apply(this, arguments)
						}), [ne, eR, nW, nP, nK, ]),
						nX = (0, d.useCallback)(function(e, n, t, r) {
							ny.current.addNode(e, r, n, V.Jq.Prompt)
						}, []),
						nQ = (0, d.useCallback)(function(e, n, t) {
							var r = n.value;
							nX(e, nw, V.Jq.Prompt, r), nY(V.Os.Next, e, t, !0)
						}, [nw, nX, nY]),
						n0 = (0, d.useMemo)(function() {
							var e, n, t = ny.current.getNode(nw),
								r = t.type === V.Jq.Prompt,
								a = (null === (e = t.metadata) || void 0 === e ? void 0 : e.err) && (null === (n = t.metadata) || void 0 === n ? void 0 : n.errCode) !== G.Dd;
							return Boolean(r || a) && 0 === nD.size
						}, [nD.size, nw]),
						n1 = (0, d.useCallback)(function(e) {
							var n = ny.current.getParentPromptNode(e)
								.id;
							n0 && (n = e), nY(V.Os.Variant, n, {
								eventSource: "mouse"
							}, !1)
						}, [nY, n0]),
						n2 = (0, d.useCallback)(function(e) {
							nY(V.Os.Continue, e, {
								eventSource: "mouse"
							}, !1)
						}, [nY]),
						n3 = (0, d.useCallback)(function(e) {
							ny.current.addNode(e.id, e, nw, V.Jq.System), nY(V.Os.Next, e.id, {}, !0)
						}, [nY, nw]),
						n4 = !!(eP.has("tools2") && (null == nb ? void 0 : null === (r = nb.enabledTools) || void 0 === r ? void 0 : r.includes("tools2"))),
						n6 = (0, d.useCallback)((eZ = (0, S.Z)(function(e) {
							var n;
							return (0, R.__generator)(this, function(r) {
								switch (r.label) {
									case 0:
										if (!n4) return [3, 3];
										return e.preventDefault(), e.stopPropagation(), n = e.currentTarget.href, [4, t.e(949)
											.then(t.bind(t, 93949))
										];
									case 1:
										return [4, r.sent()
											.handleSandboxLinkClick(eP, nb, eG)(n)
										];
									case 2:
										r.sent(), r.label = 3;
									case 3:
										return [2]
								}
							})
						}), function(e) {
							return eZ.apply(this, arguments)
						}), [eP, nb, eG, n4]),
						n5 = (0, d.useCallback)(function(e) {
							nC(ny.current.getLeafFromNode(e)
								.id), eI(g.s6.changeNode)
						}, [eI, nC]),
						n8 = (0, d.useCallback)(function(e, n) {
							ny.current.updateNodeText(e, n)
						}, []),
						n7 = (0, d.useCallback)(function(e, n, t) {
							eI(g.s6.thumbRating, {
								id: n,
								threadId: eG.current,
								rating: t,
								model: np
							}), eG.current && H.ZP.submitMessageFeedback({
								message_id: n,
								conversation_id: eG.current,
								rating: t
							}), eB(t), eO(n);
							var r = ny.current.getMetadata(e);
							ny.current.updateNode(e, {
								metadata: {
									$set: (0, b.Z)((0, v.Z)({}, r), {
										rating: t
									})
								}
							})
						}, [eI, np]),
						n9 = (0, d.useCallback)(function() {
							var e, n = null === (e = ez.current) || void 0 === e ? void 0 : e.elements,
								t = (0, I.Z)(n || [])
								.filter(function(e) {
									return e.checked
								})
								.map(function(e) {
									return e.id
								}),
								r = (null == n ? void 0 : n["feedback-other"].value) || "";
							eD && eU && (r || t.length > 0) && (eI(g.s6.reportResult, {
								id: eU,
								threadId: eG.current,
								content: r,
								model: np,
								rating: eD,
								tags: t
							}), eG.current && H.ZP.submitMessageFeedback({
								message_id: eU,
								conversation_id: eG.current,
								rating: eD,
								text: r,
								tags: t.map(function(e) {
									return e.replace("feedback-", "")
								})
							})), eB(void 0)
						}, [eI, np, eU, eD]),
						te = (0, d.useCallback)(function(e) {
							ny.current.deleteNode(e)
						}, []),
						tn = (0, d.useCallback)(function(e) {
							switch (null == e ? void 0 : e.state) {
								case "pending":
									nX("artifact", "root", V.Jq.Prompt, e.url), nX("artifact-summary", "artifact", V.Jq.Completion, "loading..."), nC("artifact"), nT(e);
									break;
								case "success":
									n8("artifact-summary", e.contents), nC("artifact-summary"), nT(e);
									break;
								default:
									nT(e)
							}
						}, [nX, n8, nC]),
						tt = (0, d.useCallback)(function() {
							nf(function(e) {
								return "debug" !== e && "debug"
							})
						}, []),
						tr = (0, d.useCallback)(function() {
							eI(g.s6.clickSidebarAccountPortalMenuItem), nu(!0)
						}, [eI, nu]),
						ta = (0, d.useCallback)(function() {
							nu(!1)
						}, [nu]),
						to = w(function(e) {
							return {
								setShowAccountPaymentModal: e.setShowAccountPaymentModal,
								showAccountPaymentModal: e.showAccountPaymentModal
							}
						}),
						ti = to.showAccountPaymentModal,
						ts = to.setShowAccountPaymentModal,
						tl = (0, d.useCallback)(function() {
							ts(!0, function() {
								eI(g.s6.clickSidebarAccountPaymentMenuItem)
							})
						}, [eI, ts]),
						tu = (0, d.useCallback)(function() {
							ts(!1)
						}, [ts]),
						tc = (0, d.useCallback)(function() {
							nf(function(e) {
								return "navigation" !== e && "navigation"
							})
						}, []),
						td = (0, d.useCallback)(function(e, n) {
							if (ny.current.isFirstCompletion) {
								var t, r = ny.current.getParent(n);
								(null === (t = r.metadata) || void 0 === t ? void 0 : t.errCode) !== G.Dd && setTimeout(function() {
									n$(r.message.id)
								}, 500)
							}
							nR(function(e) {
								var t = e[n],
									r = (0, i.Z)(e, [n].map(F.Z));
								return null == t || t.abort(), r
							}), nE(function(e) {
								var t = new Set(e);
								return t.delete(n), t
							})
						}, [n$]),
						tf = (0, d.useCallback)(function(e, n) {
							var t = n.id,
								r = n.aborter;
							r && nR(function(e) {
								return (0, b.Z)((0, v.Z)({}, e), (0, M.Z)({}, t, r))
							})
						}, []),
						tm = (0, d.useCallback)(function() {
							nR(function(e) {
								return Object.values(e)
									.forEach(function(e) {
										return e.abort()
									}), {}
							}), nE(new Set), nC("root"), nT(null), ny.current = new Y.Cv, eG.current = "", nN(!0), eQ()
						}, [eQ]),
						th = (0, d.useCallback)(function() {
							H.ZP.deleteConversations()
								.then(function() {
									eQ()
								}), eM.asPath !== r0 ? eM.replace({
									pathname: r0
								}) : tm()
						}, [tm, eQ, eM]),
						tg = (0, d.useCallback)(function() {
							ni(!0)
						}, []);
					(0, d.useEffect)(function() {
						return _()
							.subscribe("AbortCompletion", td), _()
							.subscribe("PublishAborter", tf), _()
							.subscribe("UnrecoverableError", tg),
							function() {
								_()
									.unsubscribe("AbortCompletion"), _()
									.unsubscribe("PublishAborter"), _()
									.unsubscribe("UnrecoverableError")
							}
					}, [td, tf, tg]);
					var tx = (0, d.useMemo)(function() {
							return ny.current.getConversationTurns(nw || "root")
						}, [nw]),
						tp = (0, d.useMemo)(function() {
							return 0 === tx.length ? nw : Y.Cv.getRequestIdFromConversationTurn(tx[tx.length - 1])
						}, [tx, nw]),
						tv = (0, d.useState)(""),
						ty = tv[0],
						tj = tv[1],
						tw = (0, d.useCallback)(function() {
							nr(!0), x.m.setItem("oai/librarian/hasSeenWarning", "true")
						}, []),
						tC = (0, d.useCallback)(function() {
							e6(!1)
						}, []),
						tk = (0, d.useMemo)(function() {
							return eP.has("debug") ? new Set([tb.G3.Model]) : new Set
						}, [eP]),
						tZ = (0, d.useMemo)(function() {
							return !!eP.has("can_continue") && !nF[nw] && ny.current.isMessageIncomplete(nw)
						}, [nF, nw, eP]),
						tN = void 0 !== eV && eV,
						tP = (0, rd()
							.getHasSeenOnboardingDate)(),
						tS = tP && new Date("2023-01-11") > tP && !localStorage.getItem(rQ);
					(0, d.useEffect)(function() {
						tS && (rw.m.success("Your previously unavailable conversation history has been restored! Your previous conversations can now be viewed and continued as normal. We apologize for any inconvenience caused by the recent outage. Thank you for your patience and understanding.", {
							hasCloseButton: !0,
							duration: 0
						}), localStorage.setItem(rQ, "true"))
					}, [tS]);
					var tM = (0, d.useMemo)(function() {
						return (0, s.jsx)(eg, {
							items: eK || [],
							activeId: nZ ? "" : eG.current,
							hasNextPage: Boolean(eY),
							onNextPage: eX,
							onNewThread: tm,
							onRefetchHistory: eQ,
							onUpdateUserModifiedTitle: nV,
							userModifiedTitle: nG,
							newChatName: nU,
							isLoading: e0,
							isError: e1
						})
					}, [eK, nZ, eY, eX, tm, eQ, nG, nU, e0, e1, ]);
					return (0, s.jsxs)(r2, {
						children: [(0, s.jsx)(q(), {
							children: (0, s.jsx)("title", {
								children: nH
							})
						}), !nt && (0, s.jsx)(f.Z, {
							isOpen: !0,
							onModalClose: tw,
							icon: D.Z,
							title: "Do not share sensitive materials with this application",
							primaryButton: (0, s.jsx)(f.m, {
								onClick: tw,
								title: "Acknowledge"
							}),
							type: "danger"
						}, "OnboardingModal"), e9 && e4 && (0, s.jsx)(f.Z, {
							isOpen: !0,
							onModalClose: tC,
							icon: m.U0j,
							title: "This prompt may violate our content policy.",
							primaryButton: (0, s.jsx)(f.m, {
								onClick: tC,
								title: "Acknowledge"
							}),
							type: "danger"
						}, "RestrictedTerms"), Boolean(eD) && (0, s.jsx)(f.Z, {
							isOpen: !0,
							onModalClose: function() {
								return eB(void 0)
							},
							type: "thumbsUp" === eD ? "success" : "danger",
							icon: "thumbsUp" === eD ? m.fmn : m.oLd,
							title: "Provide additional feedback",
							primaryButton: (0, s.jsx)(f.m, {
								title: "Submit feedback",
								onClick: n9
							}),
							children: (0, s.jsxs)("form", {
								ref: ez,
								children: [(0, s.jsx)(U.ZP, {
									id: "feedback-other",
									placeholder: "What would the ideal answer have been?",
									rows: 3,
									className: "mt-4 mb-1 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white"
								}), "thumbsDown" === eD && (0, s.jsxs)(s.Fragment, {
									children: [(0, s.jsx)(X, {
										id: "feedback-harmful",
										label: "This is harmful / unsafe"
									}), (0, s.jsx)(X, {
										id: "feedback-false",
										label: "This isn't true"
									}), (0, s.jsx)(X, {
										id: "feedback-not-helpful",
										label: "This isn't helpful"
									})]
								})]
							})
						}, "RatingModal-".concat(eU)), (0, s.jsxs)("div", {
							className: "flex h-full flex-1 flex-col md:pl-[260px]",
							children: [eT && (0, s.jsx)(eq, {
								onNewThread: tm,
								onSidebarOpen: tc,
								title: eN.title,
								newChatName: nU
							}), (0, s.jsxs)(r3, {
								className: "flex-1 ",
								children: [(0, s.jsx)(r4, {
									children: (0, s.jsx)(t2, {
										children: (0, s.jsx)(tJ, {
											isLoading: eS,
											onChangeItemInView: n5,
											onCreateNewNode: nX,
											onUpdateNode: n8,
											onChangeRating: n7,
											onDeleteNode: te,
											onRequestCompletion: nY,
											onChangeCurrentPrompt: tj,
											onSandboxLinkClick: n6,
											threadId: eG.current,
											treeRef: ny,
											conversationTurns: tx,
											activeRequests: nD,
											isProcessingArtifact: (null == nM ? void 0 : nM.state) === "pending",
											onChangeModelSetting: nv,
											availableModels: nm,
											currentThreadModel: eN.lastModelUsed,
											canShowThreadSettings: eP.has("model_switcher") && nm.length > 1
										})
									})
								}), (0, s.jsxs)(r6, {
									children: [(0, s.jsx)(e2, {
										currentLeafId: nw,
										currentRequestId: tp,
										threadId: eG.current,
										currentPrompt: ty,
										onChangeCurrentPrompt: tj,
										onRequestMoreCompletions: n1,
										onCreateNewCompletion: nQ,
										onAbortCompletion: td,
										onContinueGenerating: n2,
										onFileUpload: n3,
										canUpload: n4,
										isCompletionInProgress: nD.has(tp),
										onUpdateArtifactStatus: tn,
										artifact: nM,
										className: (0, E.Z)("stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6"),
										shouldRetry: n0,
										canContinue: tZ,
										disabled: !nm.length,
										canPause: Boolean(nF[tp])
									}), !eV && (0, s.jsxs)("div", {
										className: "px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6",
										children: [(0, s.jsx)("a", {
											href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
											target: "_blank",
											rel: "noreferrer",
											className: "underline",
											children: "ChatGPT Feb 13 Version"
										}), ". The one who defeats you is never AI, but someone who can use AI."]
									})]
								})]
							})]
						}), eT && (0, s.jsx)(eL, {
							onSidebarOpen: tc,
							sidebarOpen: "navigation" === nd,
							onClickAccountPayment: tl,
							showAccountPaymentMenuItem: !tN && eH,
							onClickCustomerPortal: tr,
							showCustomerPortalMenuItem: tN,
							onDeleteHistory: th,
							showDeleteHistory: Boolean(null == eK ? void 0 : eK.length),
							onNewThread: tm,
							onOpenDebugPanel: tt,
							children: tM
						}), !eT && (0, s.jsx)(eE, {
							onClickAccountPayment: tl,
							showAccountPaymentMenuItem: !tN && eH,
							onClickCustomerPortal: tr,
							showCustomerPortalMenuItem: tN,
							onDeleteHistory: th,
							showDeleteHistory: Boolean(null == eK ? void 0 : eK.length),
							onNewThread: tm,
							onOpenDebugPanel: tt,
							settings: tk.size > 0 && (0, s.jsx)(e8.ZP, {
								temperature: nx,
								onRestoreDefaults: nJ,
								onChangeModelSetting: nv,
								position: "top-right",
								modelSettings: tk,
								features: eP,
								children: (0, s.jsxs)(A.J.Button, {
									as: eF,
									children: [(0, s.jsx)(p.ZP, {
										icon: m.nbt
									}), "Settings"]
								})
							}),
							children: tM
						}), (0, s.jsx)(e7, {
							icon: m.cDN,
							title: "Debug",
							sidebarOpen: "debug" === nd,
							onSidebarOpen: tc,
							children: (0, s.jsx)(rL, {
								treeRef: ny,
								currentLeafId: nw
							})
						}), eH && (0, s.jsx)(rP.Z, {
							isOpen: ti,
							onClose: tu
						}), tN && (0, s.jsx)(rN, {
							isOpen: nl,
							onClose: ta
						}), no && (0, s.jsx)(f.Z, {
							onModalClose: u(),
							isOpen: !0,
							icon: D.Z,
							title: "Something went wrong",
							description: "We're sorry, but something went wrong. Please try again later.",
							primaryButton: (0, s.jsx)(f.m, {
								onClick: function() {
									tm(), ni(!1)
								},
								title: "Reset thread"
							}),
							type: "danger"
						}, "UnrecoverableErrorModal")]
					})
				},
				r2 = O.Z.div(rJ()),
				r3 = O.Z.main(rK()),
				r4 = O.Z.div(rY()),
				r6 = O.Z.div(rX()),
				r5 = t(49690),
				r8 = {
					AD: "Andorra",
					AE: "United Arab Emirates",
					AG: "Antigua and Barbuda",
					AI: "Anguilla",
					AL: "Albania",
					AM: "Armenia",
					AO: "Angola",
					AQ: "Antarctica",
					AR: "Argentina",
					AS: "American Samoa",
					AT: "Austria",
					AU: "Australia",
					AW: "Aruba",
					AX: "\xc5land Islands",
					AZ: "Azerbaijan",
					BA: "Bosnia and Herzegovina",
					BB: "Barbados",
					BD: "Bangladesh",
					BE: "Belgium",
					BF: "Burkina Faso",
					BG: "Bulgaria",
					BJ: "Benin",
					BL: "Saint Barth\xe9lemy",
					BM: "Bermuda",
					BN: "Brunei",
					BO: "Bolivia",
					BQ: "Caribbean Netherlands",
					BR: "Brazil",
					BS: "The Bahamas",
					BT: "Bhutan",
					BV: "Bouvet Island",
					BW: "Botswana",
					BZ: "Belize",
					CA: "Canada",
					CC: "Cocos (Keeling) Islands",
					CG: "The Republic of the Congo",
					CH: "Switzerland",
					CI: "Ivory Coast",
					CK: "Cook Islands",
					CL: "Chile",
					CO: "Colombia",
					CR: "Costa Rica",
					CV: "Cape Verde",
					CW: "Cura\xe7ao",
					CX: "Christmas Island",
					CY: "Cyprus",
					CZ: "Czech Republic",
					DE: "Germany",
					DJ: "Djibouti",
					DK: "Denmark",
					DM: "Dominica",
					DO: "Dominican Republic",
					DZ: "Algeria",
					EC: "Ecuador",
					EE: "Estonia",
					EH: "Western Sahara",
					ES: "Spain",
					FI: "Finland",
					FJ: "Fiji",
					FK: "Falkland Islands",
					FM: "Micronesia",
					FO: "Faroe Islands",
					FR: "France",
					GA: "Gabon",
					GB: "United Kingdom",
					GD: "Grenada",
					GE: "Georgia",
					GF: "French Guiana",
					GG: "Guernsey",
					GH: "Ghana",
					GI: "Gibraltar",
					GL: "Greenland",
					GM: "Gambia",
					GN: "Guinea",
					GP: "Guadeloupe",
					GR: "Greece",
					GS: "South Georgia and the South Sandwich Islands",
					GT: "Guatemala",
					GU: "Guam",
					GW: "Guinea-Bissau",
					GY: "Guyana",
					HM: "Heard Island and McDonald Islands",
					HN: "Honduras",
					HR: "Croatia",
					HT: "Haiti",
					HU: "Hungary",
					ID: "Indonesia",
					IE: "Ireland",
					IL: "Israel",
					IM: "Isle of Man",
					IO: "British Indian Ocean Territory",
					IQ: "Iraq",
					IS: "Iceland",
					IT: "Italy",
					JE: "Jersey",
					JM: "Jamaica",
					JO: "Jordan",
					JP: "Japan",
					KE: "Kenya",
					KG: "Kyrgyzstan",
					KI: "Kiribati",
					KM: "Comoros",
					KN: "Saint Kitts and Nevis",
					KR: "South Korea",
					KW: "Kuwait",
					KY: "Cayman Islands",
					KZ: "Kazakhstan",
					LB: "Lebanon",
					LC: "Saint Lucia",
					LI: "Liechtenstein",
					LK: "Sri Lanka",
					LR: "Liberia",
					LS: "Lesotho",
					LT: "Lithuania",
					LU: "Luxembourg",
					LV: "Latvia",
					MA: "Morocco",
					MC: "Monaco",
					MD: "Moldova",
					ME: "Montenegro",
					MF: "Saint Martin",
					MG: "Madagascar",
					MH: "The Marshall Islands",
					MK: "North Macedonia",
					ML: "Mali",
					MM: "Myanmar",
					MN: "Mongolia",
					MP: "The Northern Mariana Islands",
					MQ: "Martinique",
					MR: "Mauritania",
					MS: "Montserrat",
					MT: "Malta",
					MU: "Mauritius",
					MV: "Maldives",
					MW: "Malawi",
					MX: "Mexico",
					MY: "Malaysia",
					MZ: "Mozambique",
					NA: "Namibia",
					NC: "New Caledonia",
					NE: "Niger",
					NF: "Norfolk Island",
					NG: "Nigeria",
					NI: "Nicaragua",
					NL: "Netherlands",
					NO: "Norway",
					NP: "Nepal",
					NR: "Nauru",
					NU: "Niue",
					NZ: "New Zealand",
					OM: "Oman",
					PA: "Panama",
					PE: "Peru",
					PF: "French Polynesia",
					PG: "Papua New Guinea",
					PH: "Philippines",
					PK: "Pakistan",
					PL: "Poland",
					PM: "Saint Pierre and Miquelon",
					PN: "Pitcairn",
					PR: "Puerto Rico",
					PS: "Palestine",
					PT: "Portugal",
					PW: "Palau",
					PY: "Paraguay",
					QA: "Qatar",
					RE: "Reunion",
					RO: "Romania",
					RS: "Serbia",
					RW: "Rwanda",
					SB: "Solomon Islands",
					SC: "The Seychelles",
					SE: "Sweden",
					SG: "Singapore",
					SH: "Saint Helena, Ascension and Tristan da Cunha",
					SI: "Slovenia",
					SJ: "Svalbard and Jan Mayen",
					SK: "Slovakia",
					SL: "Sierra Leone",
					SM: "San Marino",
					SN: "Senegal",
					SR: "Suriname",
					ST: "Sao Tome and Principe",
					SV: "El Salvador",
					SX: "Sint Maarten",
					TC: "Turks and Caicos Islands",
					TF: "French Southern Territories",
					TG: "Togo",
					TH: "Thailand",
					TK: "Tokelau",
					TL: "Timor-Leste",
					TN: "Tunisia",
					TO: "Tonga",
					TR: "Turkey",
					TT: "Trinidad and Tobago",
					TV: "Tuvalu",
					TW: "Taiwan",
					TZ: "Tanzania",
					UA: "Ukraine",
					UG: "Uganda",
					UM: "The United States Minor Outlying Islands",
					US: "The United States",
					UY: "Uruguay",
					VA: "Vatican City",
					VC: "Saint Vincent and the Grenadines",
					VG: "British Virgin Islands",
					VI: "U.S. Virgin Islands",
					VN: "Vietnam",
					VU: "Vanuatu",
					WF: "Wallis and Futuna",
					WS: "Samoa",
					YT: "Mayotte",
					ZA: "South Africa",
					ZM: "Zambia",
					ZW: "Zimbabwe"
				},
				r7 = !0;

			function r9(e) {
				var n, t, r = e.user,
					a = e.accessToken,
					o = e.features,
					l = e.accountStatusResponse,
					m = e.isUserInCanPayGroup,
					x = e.showcasePlusUpdate,
					p = e.shouldShowPaidAnnouncement,
					v = e.serviceStatus,
					b = e.userCountry,
					y = (0, d.useState)(!1),
					j = y[0],
					w = y[1],
					C = (0, c.useRouter)(),
					k = rd()
					.getHasSeenOnboardingDate,
					N = (0, $.nR)(),
					P = (null === (n = C.query.chatId) || void 0 === n ? void 0 : n[0]) || "",
					S = (0, rG.Z)({
						threadId: P,
						accessToken: a
					}),
					M = S.threadData,
					T = S.isLoading,
					I = (0, n_.Z)(),
					F = I.installedPlugins,
					R = I.isLoading,
					A = (0, W.g)(function(e) {
						return e.updateFlagValue
					}),
					D = b ? r8[b] : void 0;
				(0, d.useEffect)(function() {
					void 0 !== m && A("isUserInCanPayGroup", m)
				}, [A, m]), (0, d.useEffect)(function() {
					void 0 !== x && A("highlightPlusUpgrade", x)
				}, [A, x]), (0, d.useEffect)(function() {
					(null == v ? void 0 : v.type) && void 0 !== N && !N && rw.m.warning(v.message, {
						hasCloseButton: !0,
						duration: 5
					})
				}, [N, null == v ? void 0 : v.message, null == v ? void 0 : v.type]);
				var E = (0, d.useMemo)(function() {
						return {
							app: g.VY,
							origin: "chat"
						}
					}, []),
					L = (0, $.mA)(function(e) {
						return {
							accountPlan: e.accountPlan,
							updateAccountPlanWithResponse: e.updateAccountPlanWithResponse
						}
					}),
					q = L.accountPlan,
					B = L.updateAccountPlanWithResponse;
				return (0, r5.Z)("ChatGPT", r, a, E, o, null == l ? void 0 : l.account_plan), (0, d.useEffect)(function() {
					var e;
					(null == q ? void 0 : q.hasPaidSubscription) !== (null === (e = l.account_plan) || void 0 === e ? void 0 : e.is_paid_subscription_active) && l && B(l)
				}, [B, l, q]), (0, d.useEffect)(function() {
					w(!k())
				}, [k]), (0, d.useEffect)(function() {
					if (!R) {
						var e = C.query,
							n = e.loginAip,
							t = e.loginSuccess,
							r = (0, i.Z)(e, ["loginAip", "loginSuccess"]);
						if (n) {
							var a = F.find(function(e) {
								return e.id === n
							});
							a && "true" === t ? ((0, nB.wu)(C.query.loginAip), rw.m.success("Added ".concat(a.manifest.name_for_human, "."))) : rw.m.warning("Couldn't log in with ".concat((null == a ? void 0 : a.manifest.name_for_human) || "plugin", ".")), C.replace({
								pathname: C.pathname,
								query: r
							})
						}
					}
				}, [C, F, R]), (0, s.jsxs)(h.Af.Provider, {
					value: E,
					children: [(0, s.jsx)(f.Z, {
						isOpen: j,
						onModalClose: u(),
						type: "success",
						title: "",
						primaryButton: void 0,
						children: (0, s.jsx)(rf, {
							onClose: function() {
								return w(!1)
							}
						})
					}), (0, s.jsx)(Z, {
						userCountry: D,
						canShowPaidAnnouncement: p,
						isUserPaid: null === (t = l.account_plan) || void 0 === t ? void 0 : t.is_paid_subscription_active,
						hasSeenOnboardingDate: k()
					}), (0, s.jsx)(r1, {
						initialData: M,
						features: new Set(o),
						isLoading: T
					}, M.threadId || "new")]
				})
			}
		},
		23119: function(e, n, t) {
			"use strict";
			t.d(n, {
				Ph: function() {
					return v
				},
				Yt: function() {
					return j
				},
				k$: function() {
					return p
				}
			});
			var r = t(14806),
				a = t(35250),
				o = t(19841),
				i = t(96424),
				s = t.n(i),
				l = t(48240),
				u = t(34303),
				c = t(79876);

			function d() {
				var e = (0, r.Z)(["relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center"]);
				return d = function() {
					return e
				}, e
			}

			function f() {
				var e = (0, r.Z)(["\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ", "\n  ", "\n"]);
				return f = function() {
					return e
				}, e
			}

			function m() {
				var e = (0, r.Z)(["bg-[#5436DA] rounded-sm text-white flex justify-center items-center relative tracking-widest"]);
				return m = function() {
					return e
				}, e
			}

			function h() {
				var e = (0, r.Z)(["relative flex"]);
				return h = function() {
					return e
				}, e
			}
			var g = u.Z.div(d()),
				x = u.Z.span(f(), function(e) {
					return "warning" === e.$type && "bg-orange-500 text-white"
				}, function(e) {
					return "danger" === e.$type && "bg-red-500 text-white"
				}),
				p = function(e) {
					var n = e.iconName,
						t = e.background,
						r = e.notice,
						o = c.nI;
					switch (n) {
						case "globe":
							o = l.RsK;
							break;
						case "terminal":
							o = l.cDN;
							break;
						case "t":
							o = l.RUS;
							break;
						case "s":
							o = l.jRj;
							break;
						case "c":
							o = l.CFv;
							break;
						case "p":
							o = l.yG
					}
					return (0, a.jsxs)(g, {
						style: {
							backgroundColor: t
						},
						children: [(0, a.jsx)(c.ZP, {
							icon: o,
							size: "medium"
						}), r && (0, a.jsx)(x, {
							$type: r,
							children: "!"
						})]
					})
				},
				v = function(e) {
					var n = e.plugin,
						t = e.notice;
					return (0, a.jsxs)(g, {
						className: "p-0",
						children: [(0, a.jsx)("img", {
							src: n.manifest.logo_url,
							alt: "".concat(n.manifest.name_for_human, " logo"),
							className: "h-full w-full rounded-sm"
						}), t && (0, a.jsx)(x, {
							$type: t,
							children: "!"
						})]
					})
				},
				b = u.Z.div(m()),
				y = u.Z.div(h()),
				j = function(e) {
					var n = e.user,
						t = e.size,
						r = void 0 === t ? "small" : t,
						i = e.notice,
						u = i && (0, a.jsx)(x, {
							$type: i,
							children: "!"
						});
					if (null == n ? void 0 : n.picture) return (0, a.jsxs)(y, {
						children: [(0, a.jsx)(s(), {
							src: n.picture,
							alt: n.name,
							width: "small" === r ? 30 : 38,
							height: "small" === r ? 30 : 38,
							className: "rounded-sm"
						}), u]
					});
					var d = ((null == n ? void 0 : n.name) || "")
						.split(" ")
						.map(function(e) {
							return e[0]
						})
						.join("");
					return (0, a.jsxs)(b, {
						className: (0, o.Z)("small" === r ? "h-8 w-8 text-xs" : "h-10 w-10 text-lg"),
						children: [d || (0, a.jsx)(c.ZP, {
							icon: l.fzv,
							size: "medium"
						}), u]
					})
				}
		},
		35873: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return d
				}
			});
			var r = t(14806),
				a = t(35250),
				o = t(70079),
				i = t(48240),
				s = t(34303),
				l = t(60612),
				u = t(79876);

			function c() {
				var e = (0, r.Z)(["flex ml-auto gap-2"]);
				return c = function() {
					return e
				}, e
			}

			function d(e) {
				var n = e.text,
					t = e.onCopy,
					r = (0, o.useState)(!1),
					s = r[0],
					c = r[1],
					d = (0, l.Z)(),
					m = (0, o.useCallback)(function() {
						t(), c(!0), setTimeout(function() {
							d() && c(!1)
						}, 2e3)
					}, [d, t]);
				return (0, a.jsxs)(a.Fragment, {
					children: [!s && (0, a.jsxs)(f, {
						onClick: m,
						children: [(0, a.jsx)(u.ZP, {
							icon: i.j4u
						}), n]
					}), s && (0, a.jsxs)(f, {
						children: [(0, a.jsx)(u.ZP, {
							icon: i.UgA
						}), n && "Copied!"]
					})]
				})
			}
			var f = s.Z.button(c())
		},
		20212: function(e, n, t) {
			"use strict";
			t.d(n, {
				D2: function() {
					return p
				},
				Vp: function() {
					return k
				},
				YA: function() {
					return b
				},
				ZP: function() {
					return v
				}
			});
			var r = t(14806),
				a = t(35250),
				o = t(35888),
				i = t(40638),
				s = t(19841),
				l = t(70079),
				u = t(99581),
				c = t(48240),
				d = t(34303),
				f = t(11699),
				m = t(79876);

			function h() {
				var e = (0, r.Z)(["rounded bg-white ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-white/20"]);
				return h = function() {
					return e
				}, e
			}

			function g() {
				var e = (0, r.Z)(["absolute z-10 mt-2 max-h-60 w-full overflow-auto text-base focus:outline-none dark:last:border-0 sm:text-xs md:w-[100%]"]);
				return g = function() {
					return e
				}, e
			}

			function x() {
				var e = (0, r.Z)(["absolute z-10 -ml-[1px] flex flex-col gap-2 p-3"]);
				return x = function() {
					return e
				}, e
			}
			var p = ["confidential", "plus"];

			function v(e) {
				var n = e.name,
					t = e.selectedOption,
					r = e.options,
					i = e.actions,
					s = e.onChange,
					u = e.onAction,
					c = (0, l.useCallback)(function(e) {
						"string" == typeof e ? null == u || u(e) : s(e)
					}, [s, u]);
				return (0, a.jsx)(o.R, {
					value: t.value,
					onChange: c,
					children: function(e) {
						var o = e.open;
						return (0, a.jsx)(y, {
							name: n,
							selectedLabel: (0, a.jsxs)(a.Fragment, {
								children: [t.title, t.tags.map(function(e) {
									return k(e)
								})]
							}),
							open: o,
							options: r,
							actions: i
						})
					}
				})
			}

			function b(e) {
				var n = e.name,
					t = e.selectedOptions,
					r = e.selectedLabel,
					i = e.options,
					s = e.actions,
					u = e.onChange,
					c = e.onAction,
					d = (0, l.useCallback)(function(e) {
						if (e.some(function(e) {
							return "string" == typeof e
						})) {
							var n = e.find(function(e) {
								return "string" == typeof e
							});
							null == c || c(n)
						} else u(e)
					}, [u, c]);
				return (0, a.jsx)(o.R, {
					value: t.map(function(e) {
						return e.value
					}),
					multiple: !0,
					onChange: d,
					children: function(e) {
						var o = e.open;
						return (0, a.jsx)(y, {
							name: n,
							selectedLabel: r || "".concat(t.length, " selected"),
							open: o,
							options: i,
							actions: s
						})
					}
				})
			}

			function y(e) {
				var n = e.name,
					t = e.selectedLabel,
					r = e.open,
					d = e.options,
					h = e.actions,
					g = (0, l.useRef)(null),
					x = (0, f.dD)();
				return (0, a.jsx)(a.Fragment, {
					children: (0, a.jsxs)("div", {
						className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4",
						children: [(0, a.jsxs)(o.R.Button, {
							className: "relative flex w-full cursor-default flex-col rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm",
							children: [(0, a.jsx)(o.R.Label, {
								className: "block text-xs text-gray-700 dark:text-gray-500",
								children: n
							}), (0, a.jsx)("span", {
								className: "inline-flex w-full truncate",
								children: (0, a.jsx)("span", {
									className: "flex h-6 items-center gap-1 truncate",
									children: t
								})
							}), (0, a.jsx)("span", {
								className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
								children: (0, a.jsx)(m.ZP, {
									icon: c.bTu,
									className: " text-gray-400",
									"aria-hidden": "true"
								})
							})]
						}), (0, a.jsx)(i.u, {
							show: r,
							as: l.Fragment,
							leave: "transition ease-in duration-100",
							leaveFrom: "opacity-100",
							leaveTo: "opacity-0",
							children: (0, a.jsxs)(N, {
								$as: o.R.Options,
								ref: g,
								children: [d.map(function(e, n) {
									return (0, a.jsx)(j, {
										value: e.value,
										children: function(n) {
											var t = n.selected,
												r = n.active;
											return (0, a.jsxs)(a.Fragment, {
												children: [(0, a.jsxs)("div", {
													className: "flex items-center gap-1 truncate",
													children: [e.imageUrl && (0, a.jsx)("img", {
														src: e.imageUrl,
														className: "h-6 w-6 rounded",
														alt: "".concat(e.title, " logo")
													}), (0, a.jsxs)("span", {
														className: (0, s.Z)(t && "font-semibold", "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"),
														children: [e.title, e.tags.map(function(e) {
															return k(e)
														})]
													})]
												}), t && (0, a.jsx)(w, {
													icon: c.UgA
												}), r && !x && (0, u.createPortal)((0, a.jsx)(C, {
													option: e,
													dropdownRef: g
												}), document.body)]
											})
										}
									}, n)
								}), null == h ? void 0 : h.map(function(e, n) {
									return (0, a.jsx)(j, {
										value: e.id,
										children: function() {
											return (0, a.jsxs)(a.Fragment, {
												children: [(0, a.jsx)("div", {
													className: "text-gray-800 dark:text-gray-100",
													children: e.label
												}), (0, a.jsx)(w, {
													icon: e.icon
												})]
											})
										}
									}, n)
								})]
							})
						})]
					})
				})
			}

			function j(e) {
				var n = e.value,
					t = e.children;
				return (0, a.jsx)(o.R.Option, {
					className: function(e) {
						var n = e.active;
						return (0, s.Z)(n ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900", "relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-gray-100 pl-3 pr-9 last:border-0 dark:border-white/20")
					},
					value: n,
					children: t
				})
			}

			function w(e) {
				var n = e.icon;
				return (0, a.jsx)("span", {
					className: (0, s.Z)("absolute inset-y-0 right-0 flex items-center pr-4 text-gray-800 dark:text-gray-100"),
					children: (0, a.jsx)(m.ZP, {
						icon: n,
						className: "h-5 w-5",
						"aria-hidden": "true"
					})
				})
			}

			function C(e) {
				var n = e.option,
					t = e.dropdownRef,
					r = (0, l.useState)(),
					o = r[0],
					i = r[1];
				return ((0, l.useEffect)(function() {
					var e = function() {
						if (t.current) {
							var e, n = t.current.getBoundingClientRect(),
								r = n.top;
							i({
								top: r,
								left: n.left - 238,
								minHeight: n.height
							})
						}
					};
					return e(), window.addEventListener("resize", e),
						function() {
							return window.removeEventListener("resize", e)
						}
				}, [t]), o) ? (0, a.jsxs)(P, {
					style: {
						width: 238,
						minHeight: o.minHeight,
						top: o.top,
						left: o.left
					},
					children: [(0, a.jsx)("div", {
						children: n.title
					}), (0, a.jsx)("div", {
						className: "text-xs",
						children: n.description
					})]
				}) : null
			}
			var k = function(e) {
					return p.includes(e) && (0, a.jsx)("span", {
						className: (0, s.Z)("py-0.25 rounded px-1 text-[10px] font-semibold uppercase", "confidential" === e && "bg-red-200 text-red-800", "plus" === e && "bg-yellow-200 text-yellow-900"),
						children: e
					}, e)
				},
				Z = d.Z.div(h()),
				N = (0, d.Z)(Z)(g()),
				P = (0, d.Z)(Z)(x())
		},
		46275: function(e, n, t) {
			"use strict";
			t.d(n, {
				bG: function() {
					return v
				},
				ZP: function() {
					return b
				}
			});
			var r = t(14806),
				a = t(35250),
				o = t(87093),
				i = t(40638),
				s = t(19841),
				l = t(70079),
				u = t(34303),
				c = t(62676),
				d = t(39690),
				f = t(6004);

			function m(e) {
				var n = e.onChange,
					t = e.enabled,
					r = e.size,
					o = e.Icon,
					i = (0, l.useCallback)(function() {
						n(!t)
					}, [t, n]),
					u = !t && "translate-x-0";
				return (0, a.jsxs)(f.r, {
					checked: t,
					onChange: i,
					className: (0, s.Z)(t ? "!bg-indigo-600" : "!bg-gray-200", "relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0", "large" === r ? "h-6 w-11" : "h-4 w-8"),
					children: [(0, a.jsx)("span", {
						className: "sr-only",
						children: "Use setting"
					}), (0, a.jsxs)("span", {
						className: (0, s.Z)("pointer-events-none relative inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", t && "large" === r ? "translate-x-5" : u, t && "small" === r ? "translate-x-4" : u, "large" === r ? "h-5 w-5" : "h-3 w-3"),
						children: [(0, a.jsx)("span", {
							className: (0, s.Z)(t ? "opacity-0 duration-100 ease-out" : "opacity-100 duration-200 ease-in", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"),
							"aria-hidden": "true"
						}), (0, a.jsx)("span", {
							className: (0, s.Z)(t ? "opacity-100 duration-200 ease-in" : "opacity-0 duration-100 ease-out", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"),
							"aria-hidden": "true",
							children: o && (0, a.jsx)(o, {
								className: "h-3 w-3 text-indigo-600"
							})
						})]
					})]
				})
			}
			var h = t(44819);

			function g() {
				var e = (0, r.Z)(["block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 outline-none border-none"]);
				return g = function() {
					return e
				}, e
			}

			function x() {
				var e = (0, r.Z)(["mt-1 outline-none border-0"]);
				return x = function() {
					return e
				}, e
			}

			function p() {
				var e = (0, r.Z)(["text-right"]);
				return p = function() {
					return e
				}, e
			}
			var v = "oai/apps/autoexpandCode";

			function b(e) {
				var n = e.children,
					t = e.temperature,
					r = e.onRestoreDefaults,
					u = e.onChangeModelSetting,
					f = e.position,
					g = e.modelSettings,
					x = e.features,
					p = (0, l.useState)(Boolean(c.m.getItem(v))),
					b = p[0],
					C = p[1],
					k = (0, l.useCallback)(function(e) {
						u(h.G3.Temperature, e.target.value)
					}, [u]),
					Z = (0, l.useCallback)(function(e) {
						C(e), c.m.setItem(v, e)
					}, []);
				return (0, a.jsxs)(o.J, {
					className: "relative",
					children: [n, (0, a.jsx)(i.u, {
						as: l.Fragment,
						enter: "transition ease-out duration-200",
						enterFrom: (0, s.Z)("opacity-0", "top-right" === f ? "translate-x-1" : "translate-y-1"),
						enterTo: (0, s.Z)("opacity-100", "top-right" === f ? "translate-x-0" : "translate-y-0"),
						leave: "transition ease-in duration-150",
						leaveFrom: (0, s.Z)("opacity-100", "top-right" === f ? "translate-x-0" : "translate-y-0"),
						leaveTo: (0, s.Z)("opacity-0", "top-right" === f ? "translate-x-1" : "translate-y-1"),
						children: (0, a.jsx)(o.J.Panel, {
							className: (0, s.Z)("absolute z-20 mt-3 w-screen max-w-xs px-2 sm:px-0", "bottom-center" === f && "right-0 top-6", "bottom-right" === f && "left-2 top-8", "top-right" === f && "left-full top-1/2 ml-6 -translate-y-full"),
							children: (0, a.jsx)("div", {
								className: "overflow-hidden rounded-lg text-left text-sm shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600",
								children: (0, a.jsxs)("div", {
									className: "relative grid gap-6 bg-white px-2 py-1 dark:bg-gray-800 sm:gap-4 sm:p-4",
									children: [g.has(h.G3.Temperature) && (0, a.jsxs)("div", {
										className: "rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600",
										children: [(0, a.jsx)("label", {
											htmlFor: "temperature",
											className: "block text-xs font-medium text-gray-800",
											children: "Temperature"
										}), (0, a.jsxs)("div", {
											className: "mt-1",
											children: [(0, a.jsx)(y, {
												type: "number",
												name: "temperature",
												id: "temperature",
												onChange: k,
												value: t,
												className: "form-input"
											}), (0, a.jsx)(j, {
												name: "temperature",
												type: "range",
												min: "0",
												max: "1",
												value: t,
												className: "range w-full",
												step: "0.05",
												onChange: k
											})]
										})]
									}), x.has("tools2") && (0, a.jsxs)("div", {
										className: "flex items-center gap-2 text-white",
										children: [(0, a.jsx)("div", {
											children: "Auto-expand code"
										}), (0, a.jsx)(m, {
											size: "small",
											enabled: b,
											onChange: Z
										})]
									}), (0, a.jsx)(w, {
										children: (0, a.jsx)(d.z, {
											as: "button",
											color: "neutral",
											onClick: r,
											children: "Restore defaults"
										})
									})]
								})
							})
						})
					})]
				})
			}
			var y = u.Z.input(g()),
				j = u.Z.input(x()),
				w = u.Z.div(p())
		},
		77064: function(e, n, t) {
			"use strict";
			t.d(n, {
				$: function() {
					return h
				},
				u: function() {
					return m
				}
			});
			var r = t(31501),
				a = t(61079),
				o = t(14806),
				i = t(35250),
				s = t(19841),
				l = t(70079),
				u = t(65921),
				c = t(34303);

			function d() {
				var e = (0, o.Z)(['\nbefore:absolute before:w-2 before:h-2 before:visible before:content-[""] before:bg-gray-100 before:border-b before:border-r before:border-black/10\n', "\n", "\n"]);
				return d = function() {
					return e
				}, e
			}

			function f() {
				var e = (0, o.Z)(["absolute w-2 h-2 -z-10"]);
				return f = function() {
					return e
				}, e
			}

			function m(e) {
				var n = e.text,
					t = e.children;
				return (0, i.jsx)("div", {
					className: "tooltip-label flex items-center whitespace-pre-wrap py-1 px-2 text-center text-sm font-medium normal-case text-gray-700",
					"data-content": n,
					children: t
				})
			}
			var h = function(e) {
					var n = e.children,
						t = e.label,
						o = e.enterDelay,
						c = void 0 === o ? 0 : o,
						d = e.leaveDelay,
						f = void 0 === d ? 50 : d,
						m = e.placement,
						h = void 0 === m ? "bottom" : m,
						g = e.offset,
						p = e.withArrow,
						v = e.interactive,
						b = void 0 !== v && v,
						y = e.wide,
						j = (0, l.useState)(!1),
						w = j[0],
						C = j[1],
						k = (0, l.useState)(null),
						Z = k[0],
						N = k[1],
						P = (0, l.useState)(null),
						S = P[0],
						M = P[1],
						T = (0, l.useState)(null),
						I = T[0],
						F = T[1],
						R = (0, u.D)(Z, S, {
							placement: h,
							modifiers: [{
								name: "offset",
								options: {
									offset: void 0 === g ? [0, 14] : g
								}
							}, {
								name: "arrow",
								options: {
									element: I
								}
							}, ]
						}),
						A = R.styles,
						D = R.attributes,
						E = R.forceUpdate,
						L = (0, l.useRef)(),
						q = (0, l.useRef)(),
						B = (0, l.useCallback)(function() {
							null == E || E(), q.current && clearTimeout(q.current), L.current = setTimeout(function() {
								return C(!0)
							}, c)
						}, [c, E]),
						_ = (0, l.useCallback)(function() {
							L.current && clearTimeout(L.current), q.current = setTimeout(function() {
								return C(!1)
							}, f)
						}, [f]);
					return (0, i.jsxs)(i.Fragment, {
						children: [(0, i.jsx)("span", {
							ref: N,
							onMouseEnter: B,
							onMouseLeave: _,
							children: n
						}), (0, i.jsxs)("div", (0, a.Z)((0, r.Z)({
							ref: M,
							style: A.popper
						}, D.popper), {
							className: (0, s.Z)("relative z-10 m-0 rounded p-1 transition-opacity", w ? "opacity-100" : "pointer-events-none opacity-0", void 0 !== y && y ? "max-w-sm" : "max-w-xs", "border border-black/10 bg-gray-100"),
							onMouseEnter: b ? B : void 0,
							onMouseLeave: b ? _ : void 0,
							children: [t, (void 0 === p || p) && (0, i.jsx)(x, {
								ref: F,
								style: A.arrow,
								$placement: h
							})]
						}))]
					})
				},
				g = c.Z.div(d(), function(e) {
					return "bottom" === e.$placement && "before:rotate-45 before:-top-7 before:-translate-y-1/2 before:-translate-x-1/2"
				}, function(e) {
					return "top" === e.$placement && "before:top-0 before:rotate-45"
				}),
				x = (0, c.Z)(g)(f())
		},
		75310: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return Y
				}
			});
			var r = t(31501),
				a = t(61079),
				o = t(89874),
				i = t(35250),
				s = t(19841),
				l = t(15762),
				u = t(70079),
				c = t(45306),
				d = t(9871),
				f = t(66285),
				m = t(60612),
				h = t(61110),
				g = t(55975),
				x = t(46050),
				p = t(29874),
				v = t(8449),
				b = t(15472);

			function y(e, n, t) {}

			function j(e, n) {}
			let w = {
					tokenize: function(e, n, t) {
						let r = this,
							a = this.events[this.events.length - 1],
							o = a && a[1].type === b.V.linePrefix ? a[2].sliceSerialize(a[1], !0)
							.length : 0,
							i = [];
						return function(n) {
							return n !== g.q.backslash && y("expected `\\`", n), e.enter("mathFlow"), e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"),
								function n(r) {
									return (y("sequenceOpen", r), r === g.q.backslash || r === g.q.leftSquareBracket && i[0] === g.q.backslash) ? (e.consume(r), i.push(r), n) : (e.exit("mathFlowFenceSequence"), i.length < 2 ? t(r) : (0, x.f)(e, s, b.V.whitespace)(r))
								}(n)
						};

						function s(n) {
							return (y("metaOpen", n), n === g.q.eof || (0, p.Ch)(n)) ? l(n) : (e.enter("mathFlowFenceMeta"), e.enter(b.V.chunkString, {
								contentType: v._.contentTypeString
							}), function n(r) {
								return (y("meta", r), r === g.q.eof || (0, p.Ch)(r)) ? (e.exit(b.V.chunkString), e.exit("mathFlowFenceMeta"), l(r)) : r === g.q.rightSquareBracket ? t(r) : (e.consume(r), n)
							}(n))
						}

						function l(t) {
							return y("openAfter", t), e.exit("mathFlowFence"), r.interrupt ? n(t) : function n(t) {
								return (y("contentStart", t), t === g.q.eof) ? u(t) : (0, p.Ch)(t) ? e.attempt(C, e.attempt({
									tokenize: c,
									partial: !0
								}, u, o ? (0, x.f)(e, n, b.V.linePrefix, o + 1) : n), u)(t) : (e.enter("mathFlowValue"), function t(r) {
									return (y("contentContinue", r), r === g.q.eof || (0, p.Ch)(r)) ? (e.exit("mathFlowValue"), n(r)) : (e.consume(r), t)
								}(t))
							}(t)
						}

						function u(t) {
							return y("after", t), e.exit("mathFlow"), n(t)
						}

						function c(e, n, t) {
							let r = [];
							return (0, x.f)(e, function(n) {
								return y("closingPrefixAfter", n), e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"),
									function n(o) {
										return (y("closingSequence", o), o === g.q.backslash && 0 === r.length || o === g.q.rightSquareBracket && r[0] === g.q.backslash) ? (e.consume(o), r.push(o), n) : r < i ? t(o) : (e.exit("mathFlowFenceSequence"), (0, x.f)(e, a, b.V.whitespace)(o))
									}(n)
							}, b.V.linePrefix, v._.tabSize);

							function a(r) {
								return (y("closingSequenceEnd", r), r === g.q.eof || (0, p.Ch)(r)) ? (e.exit("mathFlowFence"), n(r)) : t(r)
							}
						}
					},
					concrete: !0
				},
				C = {
					tokenize: function(e, n, t) {
						let r = this;
						return function(n) {
							return e.enter(b.V.lineEnding), e.consume(n), e.exit(b.V.lineEnding), a
						};

						function a(e) {
							return r.parser.lazy[r.now()
								.line] ? t(e) : n(e)
						}
					},
					partial: !0
				},
				k = {
					tokenize: function(e, n, t) {
						let r = this,
							a = r.events[r.events.length - 1],
							o = a && a[1].type === b.V.linePrefix ? a[2].sliceSerialize(a[1], !0)
							.length : 0,
							i = 0;
						return function(n) {
							return n !== g.q.dollarSign && y("expected `$`", n), e.enter("mathFlow"), e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"),
								function n(r) {
									return (y("sequenceOpen", r), r === g.q.dollarSign) ? (e.consume(r), i++, n) : (e.exit("mathFlowFenceSequence"), i < 2 ? t(r) : (0, x.f)(e, s, b.V.whitespace)(r))
								}(n)
						};

						function s(n) {
							return (y("metaOpen", n), n === g.q.eof || (0, p.Ch)(n)) ? l(n) : (e.enter("mathFlowFenceMeta"), e.enter(b.V.chunkString, {
								contentType: v._.contentTypeString
							}), function n(r) {
								return (y("meta", r), r === g.q.eof || (0, p.Ch)(r)) ? (e.exit(b.V.chunkString), e.exit("mathFlowFenceMeta"), l(r)) : r === g.q.dollarSign ? t(r) : (e.consume(r), n)
							}(n))
						}

						function l(t) {
							return y("openAfter", t), e.exit("mathFlowFence"), r.interrupt ? n(t) : function n(t) {
								return (y("contentStart", t), t === g.q.eof) ? u(t) : (0, p.Ch)(t) ? e.attempt(Z, e.attempt({
									tokenize: c,
									partial: !0
								}, u, o ? (0, x.f)(e, n, b.V.linePrefix, o + 1) : n), u)(t) : (e.enter("mathFlowValue"), function t(r) {
									return (y("contentContinue", r), r === g.q.eof || (0, p.Ch)(r)) ? (e.exit("mathFlowValue"), n(r)) : (e.consume(r), t)
								}(t))
							}(t)
						}

						function u(t) {
							return y("after", t), e.exit("mathFlow"), n(t)
						}

						function c(e, n, t) {
							let r = 0;
							return (0, x.f)(e, function(n) {
								return y("closingPrefixAfter", n), e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"),
									function n(o) {
										return (y("closingSequence", o), o === g.q.dollarSign) ? (e.consume(o), r++, n) : r < i ? t(o) : (e.exit("mathFlowFenceSequence"), (0, x.f)(e, a, b.V.whitespace)(o))
									}(n)
							}, b.V.linePrefix, v._.tabSize);

							function a(r) {
								return (y("closingSequenceEnd", r), r === g.q.eof || (0, p.Ch)(r)) ? (e.exit("mathFlowFence"), n(r)) : t(r)
							}
						}
					},
					concrete: !0
				},
				Z = {
					tokenize: function(e, n, t) {
						let r = this;
						return function(n) {
							return (0, p.Ch)(n) && y("expected eol", n), e.enter(b.V.lineEnding), e.consume(n), e.exit(b.V.lineEnding), a
						};

						function a(e) {
							return r.parser.lazy[r.now()
								.line] ? t(e) : n(e)
						}
					},
					partial: !0
				};

			function N(e) {
				let n = e.length - 4,
					t = 3,
					r, a;
				if ((e[t][1].type === b.V.lineEnding || "space" === e[t][1].type) && (e[n][1].type === b.V.lineEnding || "space" === e[n][1].type)) {
					for (r = t; ++r < n;)
						if ("mathTextData" === e[r][1].type) {
							e[n][1].type = "mathTextPadding", e[t][1].type = "mathTextPadding", t += 2, n -= 2;
							break
						}
				}
				for (r = t - 1, n++; ++r <= n;) void 0 === a ? r !== n && e[r][1].type !== b.V.lineEnding && (a = r) : (r === n || e[r][1].type === b.V.lineEnding) && (e[a][1].type = "mathTextData", r !== a + 2 && (e[a][1].end = e[r - 1][1].end, e.splice(a + 2, r - a - 2), n -= r - a - 2, r = a + 2), a = void 0);
				return e
			}

			function P(e) {
				return e !== g.q.backslash || this.events[this.events.length - 1][1].type === b.V.characterEscape
			}
			var S = t(93362),
				M = t(45369),
				T = t(42426),
				I = t(65028),
				F = t(88366),
				R = t(99847),
				A = t(14806),
				D = t(34303),
				E = t(35873);

			function L() {
				var e = (0, A.Z)(["bg-black mb-4 rounded-md"]);
				return L = function() {
					return e
				}, e
			}

			function q() {
				var e = (0, A.Z)(["flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"]);
				return q = function() {
					return e
				}, e
			}

			function B() {
				var e = (0, A.Z)([""]);
				return B = function() {
					return e
				}, e
			}

			function _() {
				var e = (0, A.Z)(["p-4 overflow-y-auto"]);
				return _ = function() {
					return e
				}, e
			}

			function U() {
				var e = (0, A.Z)(["!whitespace-pre"]);
				return U = function() {
					return e
				}, e
			}
			var O = D.Z.div(L()),
				z = D.Z.div(q()),
				G = D.Z.span(B()),
				V = D.Z.div(_()),
				H = D.Z.code(U());

			function $(e) {
				var n = e.children,
					t = e.className,
					r = e.language,
					a = e.content,
					o = (0, u.useCallback)(function() {
						navigator.clipboard.writeText(a)
					}, [a]);
				return (0, i.jsxs)(O, {
					children: [(0, i.jsxs)(z, {
						children: [r && (0, i.jsx)(G, {
							children: r
						}), (0, i.jsx)(E.Z, {
							text: "Copy code",
							onCopy: o
						})]
					}), (0, i.jsx)(V, {
						children: (0, i.jsx)(H, {
							className: t,
							children: n
						})
					})]
				})
			}
			var W = [I.Z, [function() {
					let e = this.data();

					function n(n, t) {
						let r = e[n] ? e[n] : e[n] = [];
						r.push(t)
					}
					n("micromarkExtensions", {
						flow: {
							[g.q.dollarSign]: k,
							[g.q.backslash]: w
						},
						text: {
							[g.q.backslash]: {
								tokenize: function(e, n, t) {
									let r = [],
										a = [],
										o, i = this;
									return function(n) {
										return y("start", n), n !== g.q.backslash && j("expected `\\`", n), P.call(i, i.previous) && j("expected correct previous", i.previous), e.enter("mathText"), e.enter("mathTextSequence"),
											function n(a) {
												return (y("openingSequence", a, r.join(",")), a === g.q.backslash && 0 === r.length || a === g.q.leftParenthesis && 1 === r.length) ? (e.consume(a), r.push(a), n) : r.length < 2 ? t(a) : (e.exit("mathTextSequence"), s(a))
											}(n)
									};

									function s(i) {
										return (y("gap", i), i === g.q.eof) ? t(i) : i === g.q.backslash ? (o = e.enter("mathTextSequence"), a = [], function t(i) {
											return (y("closingSequence", i, r.join(",")), i === g.q.backslash && 0 === a.length || i === g.q.rightParenthesis && 1 === a.length) ? (e.consume(i), a.push(i), t) : a.length === r.length ? (e.exit("mathTextSequence"), e.exit("mathText"), n(i)) : (o.type = "mathTextData", l(i))
										}(i)) : i === g.q.space ? (e.enter("space"), e.consume(i), e.exit("space"), s) : (0, p.Ch)(i) ? (e.enter(b.V.lineEnding), e.consume(i), e.exit(b.V.lineEnding), s) : (e.enter("mathTextData"), l(i))
									}

									function l(n) {
										return (y("data", n), n === g.q.eof || n === g.q.space || n === g.q.backslash || (0, p.Ch)(n)) ? (e.exit("mathTextData"), s(n)) : (e.consume(n), l)
									}
								},
								resolve: N,
								previous: P
							}
						}
					}), n("fromMarkdownExtensions", (0, h.N)()), n("toMarkdownExtensions", (0, h.O)())
				}, {
					singleDollarTextMath: !1
				}], ],
				J = [
					[S.Z, {
						detect: !0,
						subset: ["python", "javascript", "java", "go", "bash", "c", "cpp", "csharp", "css", "diff", "graphql", "json", "kotlin", "less", "lua", "makefile", "markdown", "objectivec", "perl", "php", "php-template", "plaintext", "python-repl", "r", "ruby", "rust", "scss", "shell", "sql", "swift", "typescript", "vbnet", "wasm", "xml", "yaml", ],
						ignoreMissing: !0
					}, ], M.Z, [T.Z, {
						newlines: !0
					}],
				],
				K = {
					code: function(e) {
						var n = e.inline,
							t = e.node,
							s = e.className,
							l = e.children,
							u = (0, o.Z)(e, ["inline", "node", "className", "children"]);
						if (n) {
							var c = (0, F.B)(t),
								d = (0, R.T$)(c);
							return d ? (0, i.jsx)(R.s8, {
								displayInfo: d
							}) : (0, i.jsx)("code", (0, a.Z)((0, r.Z)({
								className: s
							}, u), {
								children: l
							}))
						}
						var f, m = null === (f = null == s ? void 0 : s.split(" ")
								.filter(function(e) {
									return e.startsWith("language-")
								})) || void 0 === f ? void 0 : f[0],
							h = m ? m.split("-")[1] : "";
						return (0, i.jsx)($, {
							language: h,
							className: s,
							content: (0, F.B)(t),
							children: l
						})
					}
				};

			function Y(e) {
				var n = e.size,
					h = e.children,
					g = e.className,
					x = e.onSandboxLinkClick,
					p = (0, l.F)()
					.theme,
					v = (0, f.hz)()
					.has("tools2"),
					b = (0, u.useState)(""),
					y = b[0],
					j = b[1],
					w = (0, m.Z)();
				(0, u.useEffect)(function() {
					v && w() && t.e(949)
						.then(t.bind(t, 93949))
						.then(function(e) {
							return j(e.SANDBOX_LINK_PREFIX)
						})
				}, [v, j, w]);
				var C = (0, u.useMemo)(function() {
						return (0, a.Z)((0, r.Z)({}, K), {
							a: function(e) {
								var n = e.node,
									t = (0, o.Z)(e, ["node"]),
									s = n.properties.href;
								return x && v && s.startsWith(y) ? (0, i.jsx)("a", (0, a.Z)((0, r.Z)({}, t), {
									onClick: x
								})) : (0, i.jsx)("a", (0, r.Z)({}, t))
							}
						})
					}, [x, y, v]),
					k = (0, u.useCallback)(function(e) {
						return e.startsWith(y) ? e : (0, d.A)(e)
					}, [y]);
				return (0, i.jsx)(c.D, {
					rehypePlugins: J,
					remarkPlugins: W,
					linkTarget: "_new",
					className: (0, s.Z)(g, "markdown prose w-full break-words dark:prose-invert", "dark" === p ? "dark" : "light", "small" === (void 0 === n ? "medium" : n) && "prose-xs"),
					transformLinkUri: k,
					components: C,
					children: h
				})
			}
		},
		11310: function(e, n, t) {
			"use strict";
			t.d(n, {
				dT: function() {
					return o
				},
				lt: function() {
					return a
				},
				wu: function() {
					return i
				}
			});
			var r = t(64705),
				a = (0, t(59268)
					.ZP)(function() {
					return {
						enabledPluginIds: new Set
					}
				});

			function o(e) {
				a.setState(function() {
					return {
						enabledPluginIds: new Set(e)
					}
				})
			}

			function i(e) {
				a.setState(function(n) {
					return {
						enabledPluginIds: new Set((0, r.Z)(n.enabledPluginIds)
							.concat([e]))
					}
				})
			}
		},
		62588: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return l
				}
			});
			var r = t(87762),
				a = t(70079),
				o = t(82018),
				i = t(60814),
				s = t(66285);

			function l() {
				var e = (0, o.kP)()
					.session,
					n = (0, s.hz)(),
					t = (0, r.a)(["installedAip"], function() {
						return i.ZP.getPlugins({
							offset: 0,
							limit: 20,
							isInstalled: !0,
							accessToken: null == e ? void 0 : e.accessToken
						})
					}, {
						enabled: n.has("tools3") && !!(null == e ? void 0 : e.accessToken),
						onError: function(e) {
							console.error(e)
						}
					}),
					l = t.data,
					u = t.isLoading;
				return (0, a.useMemo)(function() {
					return {
						installedPlugins: l ? l.items : [],
						isLoading: u
					}
				}, [l, u])
			}
		},
		44819: function(e, n, t) {
			"use strict";
			t.d(n, {
				G3: function() {
					return r
				},
				ZP: function() {
					return c
				}
			});
			var r, a, o = t(33861),
				i = t(31501),
				s = t(61079),
				l = t(61432),
				u = t(70079);

			function c(e, n) {
				var t, a, c = (0, l.useRouter)(),
					d = c.query,
					f = n || decodeURIComponent(d[r.Model] || ""),
					m = (0, u.useMemo)(function() {
						if (0 !== e.length) {
							var n, t, r = (null === (n = e.find(function(e) {
								return e.id === f
							})) || void 0 === n ? void 0 : n.id) || (null === (t = e.find(function(e) {
								var n;
								return (n = e.id)
									.includes("text-davinci")
							})) || void 0 === t ? void 0 : t.id) || e[0].id;
							return e.find(function(e) {
								return e.id === r
							})
						}
					}, [e, f]),
					h = parseFloat(d[r.Temperature] || "1"),
					g = (0, u.useCallback)(function(e, n) {
						c.replace({
							pathname: c.basePath,
							query: (0, s.Z)((0, i.Z)({}, d), (0, o.Z)({}, e, encodeURIComponent(n)))
						}, void 0, {
							shallow: !0
						})
					}, [d, c]);
				return (0, u.useMemo)(function() {
					return {
						temperature: h,
						modelBackend: (null == m ? void 0 : m.id) || "",
						onChangeModelSetting: g
					}
				}, [g, null == m ? void 0 : m.id, h])
			}(a = r || (r = {}))
			.Model = "model", a.Temperature = "temperature", a.Context = "context"
		},
		99847: function(e, n, t) {
			"use strict";
			t.d(n, {
				Op: function() {
					return g
				},
				s8: function() {
					return h
				},
				T$: function() {
					return m
				},
				Qd: function() {
					return f
				}
			});
			var r = t(35250),
				a = t(48240),
				o = t(96424),
				i = t.n(o);

			function s(e) {
				var n, t = e.url;
				try {
					n = new URL(t)
				} catch (a) {
					return console.error(a), null
				}
				return (0, r.jsx)(i(), {
					src: "https://icons.duckduckgo.com/ip3/".concat(n.hostname, ".ico"),
					alt: "Favicon",
					width: 16,
					height: 16
				})
			}
			var l = t(79876),
				u = t(77064),
				c = "&#8203;",
				d = "oaicite:";

			function f(e, n) {
				if (!n) return e;
				for (var t = n.length - 1; t >= 0; t--) {
					var r = n[t],
						a = r.start_ix,
						o = r.end_ix,
						i = r.metadata,
						s = r.invalid_reason,
						l = {
							index: t
						};
					i ? l.metadata = i : s && (l.invalid_reason = s), e = e.slice(0, a) + "".concat(c, "`")
						.concat(d)
						.concat(JSON.stringify(l), "`")
						.concat(c) + e.slice(o)
				}
				return e
			}

			function m(e) {
				if (!e.startsWith(d)) return null;
				try {
					return JSON.parse(e.slice(d.length))
				} catch (n) {
					return {
						index: -1
					}
				}
			}

			function h(e) {
				var n, t = e.displayInfo;
				return (0, r.jsx)(u.$, {
					label: (0, r.jsx)(g, {
						pageInfo: t.metadata,
						invalidReason: t.invalid_reason
					}),
					placement: "top",
					offset: [0, 3],
					leaveDelay: 150,
					withArrow: !1,
					interactive: !0,
					wide: !0,
					children: (0, r.jsx)("a", {
						href: null === (n = t.metadata) || void 0 === n ? void 0 : n.url,
						target: "_blank",
						rel: "noreferrer",
						className: "text-green-600 !no-underline",
						children: (0, r.jsx)("sup", {
							children: t.index + 1
						})
					})
				})
			}

			function g(e) {
				var n = e.pageInfo,
					t = e.invalidReason;
				return (0, r.jsx)("a", {
					href: null == n ? void 0 : n.url,
					target: "_blank",
					rel: "noreferrer",
					className: "!no-underline",
					children: (0, r.jsx)(u.u, {
						children: n ? (0, r.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [(0, r.jsx)("div", {
								className: "flex shrink-0 items-center justify-center",
								children: (0, r.jsx)(s, {
									url: n.url
								})
							}), (0, r.jsx)("div", {
								className: "max-w-xs truncate text-xs",
								children: n.title
							}), (0, r.jsx)("div", {
								className: "shrink-0",
								children: (0, r.jsx)(l.ZP, {
									icon: a.AlO,
									size: "xsmall"
								})
							})]
						}) : (0, r.jsx)("div", {
							className: "text-red-500",
							children: t || "Invalid citation"
						})
					})
				})
			}
		},
		11699: function(e, n, t) {
			"use strict";
			t.d(n, {
				_G: function() {
					return r
				},
				dD: function() {
					return c
				},
				dQ: function() {
					return f
				},
				lj: function() {
					return d
				}
			});
			var r, a, o, i = t(33861),
				s = t(70079);
			(o = r || (r = {}))
			.Small = "small", o.Medium = "medium", o.Large = "large", o.XLarge = "xlarge", o.Full = "full";
			var l = (a = {}, (0, i.Z)(a, r.Small, 640), (0, i.Z)(a, r.Medium, 768), (0, i.Z)(a, r.Large, 1024), (0, i.Z)(a, r.XLarge, 1280), (0, i.Z)(a, r.Full, 1536), a);

			function u(e) {
				var n = function() {
						o(t(e))
					},
					t = function(e) {
						return window.matchMedia(e)
							.matches
					},
					r = (0, s.useState)(t(e)),
					a = r[0],
					o = r[1];
				return (0, s.useEffect)(function() {
					var t = window.matchMedia(e);
					return n(), t.addListener ? t.addListener(n) : t.addEventListener("change", n),
						function() {
							t.removeListener ? t.removeListener(n) : t.removeEventListener("change", n)
						}
				}, [e]), a
			}

			function c() {
				return u("(max-width: ".concat(l[r.Small], "px)"))
			}

			function d() {
				return u("(max-width: ".concat(l[r.Medium], "px)"))
			}

			function f() {
				var e = c(),
					n = d(),
					t = u("(max-width: ".concat(l[r.Large], "px)")),
					a = u("(max-width: ".concat(l[r.XLarge], "px)"));
				return e ? r.Small : n ? r.Medium : t ? r.Large : a ? r.XLarge : r.Full
			}
		},
		60612: function(e, n, t) {
			"use strict";
			var r = t(70079);
			n.Z = function() {
				var e = (0, r.useRef)(!1);
				return (0, r.useEffect)(function() {
					return e.current = !0,
						function() {
							e.current = !1
						}
				}, []), (0, r.useCallback)(function() {
					return e.current
				}, [])
			}
		},
		62676: function(e, n, t) {
			"use strict";
			t.d(n, {
				m: function() {
					return o
				}
			});
			var r = t(35025);
			t(70079);
			var a = window.localStorage,
				o = function() {
					function e() {
						(0, r.Z)(this, e)
					}
					return e.setItem = function(e, n) {
						if (!a) throw Error("You cannot set localStorage server-side");
						a.setItem(e, JSON.stringify(n))
					}, e.getItem = function(e) {
						if (a) {
							var n = a.getItem(e);
							return "string" == typeof n ? JSON.parse(n) : n
						}
						return null
					}, e.removeItem = function(e) {
						if (a) return a.removeItem(e)
					}, e
				}()
		}
	},
	function(e) {
		e.O(0, [960, 762, 424, 174, 352, 210, 814, 850, 774, 888, 179], function() {
			return e(e.s = 49529)
		}), _N_E = e.O()
	}
]);

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?b9a10a9861d8929c25d5b54dff75a224";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

