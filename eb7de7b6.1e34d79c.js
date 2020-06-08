(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{376:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(4),i=n(11),p=(n(0),n(394)),o={},r={id:"generated-config/typescript-resolvers",title:"typescript-resolvers",description:"This plugin generates TypeScript signature for resolve functions of your GraphQL API.",source:"@site/docs/generated-config/typescript-resolvers.md",permalink:"/docs/generated-config/typescript-resolvers",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-resolvers.md"},l=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>useIndexSignature</code>",id:"useindexsignature",children:[]},{value:"<code>noSchemaStitching</code>",id:"noschemastitching",children:[]},{value:"<code>wrapFieldDefinitions</code>",id:"wrapfielddefinitions",children:[]},{value:"<code>customResolveInfo</code>",id:"customresolveinfo",children:[]},{value:"<code>customResolverFn</code>",id:"customresolverfn",children:[]},{value:"<code>addUnderscoreToArgsType</code>",id:"addunderscoretoargstype",children:[]},{value:"<code>contextType</code>",id:"contexttype",children:[]},{value:"<code>fieldContextTypes</code>",id:"fieldcontexttypes",children:[]},{value:"<code>rootValueType</code>",id:"rootvaluetype",children:[]},{value:"<code>mapperTypeSuffix</code>",id:"mappertypesuffix",children:[]},{value:"<code>mappers</code>",id:"mappers",children:[]},{value:"<code>defaultMapper</code>",id:"defaultmapper",children:[]},{value:"<code>avoidOptionals</code>",id:"avoidoptionals",children:[]},{value:"<code>showUnusedMappers</code>",id:"showunusedmappers",children:[]},{value:"<code>enumValues</code>",id:"enumvalues",children:[]},{value:"<code>resolverTypeWrapperSignature</code>",id:"resolvertypewrappersignature",children:[]},{value:"<code>federation</code>",id:"federation",children:[]},{value:"<code>enumPrefix</code>",id:"enumprefix",children:[]},{value:"<code>optionalResolveType</code>",id:"optionalresolvetype",children:[]},{value:"<code>immutableTypes</code>",id:"immutabletypes",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]}]}],c={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"This plugin generates TypeScript signature for ",Object(p.b)("inlineCode",{parentName:"p"},"resolve")," functions of your GraphQL API.\nYou can use this plugin a to generate simple resolvers signature based on your GraphQL types, or you can change it's behavior be providing custom model types (mappers)."),Object(p.b)("p",null,"You can find a blog post explaining the usage of this plugin here: ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen"}),"https://the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen")),Object(p.b)("h2",{id:"installation"},"Installation"),Object(p.b)("div",{className:"admonition admonition-shell"},Object(p.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(p.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(p.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(p.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(p.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(p.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(p.b)("pre",{parentName:"div"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/typescript-resolvers\n")))),Object(p.b)("h2",{id:"api-reference"},"API Reference"),Object(p.b)("h3",{id:"useindexsignature"},Object(p.b)("inlineCode",{parentName:"h3"},"useIndexSignature")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",null,"Adds an index signature to any generates resolver."),Object(p.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   useIndexSignature: true\n")),Object(p.b)("h3",{id:"noschemastitching"},Object(p.b)("inlineCode",{parentName:"h3"},"noSchemaStitching")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",null,"Disables Schema Stitching support."),Object(p.b)("p",null,"Note: The default behavior will be reversed in the next major release. Support for Schema Stitching will be disabled by default."),Object(p.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   noSchemaStitching: true\n")),Object(p.b)("h3",{id:"wrapfielddefinitions"},Object(p.b)("inlineCode",{parentName:"h3"},"wrapFieldDefinitions")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"true")),Object(p.b)("p",null,"Set to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",Object(p.b)("inlineCode",{parentName:"p"},"FieldWrapper"),".\nThis is useful to allow return types such as Promises and functions. Needed for\ncompatibility with ",Object(p.b)("inlineCode",{parentName:"p"},"federation: true")," when"),Object(p.b)("h3",{id:"customresolveinfo"},Object(p.b)("inlineCode",{parentName:"h3"},"customResolveInfo")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"graphql#GraphQLResolveInfo")),Object(p.b)("p",null,"You can provide your custom GraphQLResolveInfo instead of the default one from graphql-js"),Object(p.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   customResolveInfo: ./my-types#MyResolveInfo\n")),Object(p.b)("h3",{id:"customresolverfn"},Object(p.b)("inlineCode",{parentName:"h3"},"customResolverFn")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"(parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult")),Object(p.b)("p",null,"You can provide your custom ResolveFn instead the default. It has to be a type that uses the generics <TResult, TParent, TContext, TArgs>"),Object(p.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(p.b)("h5",{id:"custom-signature"},"Custom Signature"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   customResolverFn: ./my-types#MyResolveFn\n")),Object(p.b)("h5",{id:"with-graphile"},"With Graphile"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - add: \"import { GraphileHelpers } from 'graphile-utils/node8plus/fieldHelpers';\"\n   - typescript\n   - typescript-resolvers\n config:\n   customResolverFn: |\n     (\n       parent: TParent,\n       args: TArgs,\n       context: TContext,\n       info: GraphQLResolveInfo & { graphile: GraphileHelpers<TParent> }\n     ) => Promise<TResult> | TResult;\n")),Object(p.b)("h3",{id:"addunderscoretoargstype"},Object(p.b)("inlineCode",{parentName:"h3"},"addUnderscoreToArgsType")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean")),Object(p.b)("p",null,"Adds ",Object(p.b)("inlineCode",{parentName:"p"},"_")," to generated ",Object(p.b)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),Object(p.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    addUnderscoreToArgsType: true\n")),Object(p.b)("h3",{id:"contexttype"},Object(p.b)("inlineCode",{parentName:"h3"},"contextType")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("p",null,"Use this configuration to set a custom type for your ",Object(p.b)("inlineCode",{parentName:"p"},"context"),", and it will\neffect all the resolvers, without the need to override it using generics each time.\nIf you wish to use an external type and import it from another file, you can use ",Object(p.b)("inlineCode",{parentName:"p"},"add")," plugin\nand add the required ",Object(p.b)("inlineCode",{parentName:"p"},"import")," statement, or you can use a ",Object(p.b)("inlineCode",{parentName:"p"},"module#type")," syntax."),Object(p.b)("h4",{id:"usage-examples-5"},"Usage Examples"),Object(p.b)("h5",{id:"custom-context-type"},"Custom Context Type"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    contextType: MyContext\n")),Object(p.b)("h5",{id:"custom-context-type-1"},"Custom Context Type"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    contextType: ./my-types#MyContext\n")),Object(p.b)("h3",{id:"fieldcontexttypes"},Object(p.b)("inlineCode",{parentName:"h3"},"fieldContextTypes")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"Array_1")),Object(p.b)("p",null,"Use this to set a custom type for a specific field ",Object(p.b)("inlineCode",{parentName:"p"},"context"),".\nIt will only affect the targeted resolvers.\nYou can either use ",Object(p.b)("inlineCode",{parentName:"p"},"Field.Path#ContextTypeName")," or ",Object(p.b)("inlineCode",{parentName:"p"},"Field.Path#ExternalFileName#ContextTypeName")),Object(p.b)("h4",{id:"usage-examples-6"},"Usage Examples"),Object(p.b)("h5",{id:"custom-field-context-types"},"Custom Field Context Types"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"plugins\n  config:\n    fieldContextTypes:\n      - MyType.foo#CustomContextType\n      - MyType.bar#./my-file#ContextTypeOne\n")),Object(p.b)("h3",{id:"rootvaluetype"},Object(p.b)("inlineCode",{parentName:"h3"},"rootValueType")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("p",null,"Use this configuration to set a custom type for the ",Object(p.b)("inlineCode",{parentName:"p"},"rootValue"),", and it will\neffect resolvers of all root types (Query, Mutation and Subscription), without the need to override it using generics each time.\nIf you wish to use an external type and import it from another file, you can use ",Object(p.b)("inlineCode",{parentName:"p"},"add")," plugin\nand add the required ",Object(p.b)("inlineCode",{parentName:"p"},"import")," statement, or you can use both ",Object(p.b)("inlineCode",{parentName:"p"},"module#type")," or ",Object(p.b)("inlineCode",{parentName:"p"},"module#namespace#type")," syntax."),Object(p.b)("h4",{id:"usage-examples-7"},"Usage Examples"),Object(p.b)("h5",{id:"custom-rootvalue-type"},"Custom RootValue Type"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    rootValueType: MyRootValue\n")),Object(p.b)("h5",{id:"custom-rootvalue-type-1"},"Custom RootValue Type"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    rootValueType: ./my-types#MyRootValue\n")),Object(p.b)("h3",{id:"mappertypesuffix"},Object(p.b)("inlineCode",{parentName:"h3"},"mapperTypeSuffix")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("p",null,"Adds a suffix to the imported names to prevent name clashes."),Object(p.b)("h4",{id:"usage-examples-8"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    mapperTypeSuffix: Model\n")),Object(p.b)("h3",{id:"mappers"},Object(p.b)("inlineCode",{parentName:"h3"},"mappers")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"object")),Object(p.b)("p",null,"Replaces a GraphQL type usage with a custom type, allowing you to return custom object from\nyour resolvers.\nYou can use both ",Object(p.b)("inlineCode",{parentName:"p"},"module#type")," and ",Object(p.b)("inlineCode",{parentName:"p"},"module#namespace#type")," syntax."),Object(p.b)("h4",{id:"usage-examples-9"},"Usage Examples"),Object(p.b)("h5",{id:"custom-context-type-2"},"Custom Context Type"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    mappers:\n      User: ./my-models#UserDbObject\n      Book: ./my-models#Collections#Book\n")),Object(p.b)("h3",{id:"defaultmapper"},Object(p.b)("inlineCode",{parentName:"h3"},"defaultMapper")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("p",null,"Allow you to set the default mapper when it's not being override by ",Object(p.b)("inlineCode",{parentName:"p"},"mappers")," or generics.\nYou can specify a type name, or specify a string in ",Object(p.b)("inlineCode",{parentName:"p"},"module#type")," or ",Object(p.b)("inlineCode",{parentName:"p"},"module#namespace#type")," format.\nThe default value of mappers it the TypeScript type generated by ",Object(p.b)("inlineCode",{parentName:"p"},"typescript")," package."),Object(p.b)("h4",{id:"usage-examples-10"},"Usage Examples"),Object(p.b)("h5",{id:"replace-with-any"},"Replace with any"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    defaultMapper: any\n")),Object(p.b)("h5",{id:"custom-base-object"},"Custom Base Object"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    defaultMapper: ./my-file#BaseObject\n")),Object(p.b)("h5",{id:"wrap-default-types-with-partial"},"Wrap default types with Partial"),Object(p.b)("p",null,'You can also specify a custom wrapper for the original type, without overriding the original generated types, use "{T}" to specify the identifier. (for flow, use ',Object(p.b)("inlineCode",{parentName:"p"},"$Shape<{T}>"),")"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"plugins\n  config:\n    defaultMapper: Partial<{T}>\n")),Object(p.b)("h5",{id:"allow-deep-partial-with-utility-types"},"Allow deep partial with ",Object(p.b)("inlineCode",{parentName:"h5"},"utility-types")),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'plugins\n plugins:\n   - "typescript"\n   - "typescript-resolvers"\n   - add: "import { DeepPartial } from \'utility-types\';"\n config:\n   defaultMapper: DeepPartial<{T}>\n')),Object(p.b)("h3",{id:"avoidoptionals"},Object(p.b)("inlineCode",{parentName:"h3"},"avoidOptionals")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",null,"This will cause the generator to avoid using optionals (",Object(p.b)("inlineCode",{parentName:"p"},"?"),"),\nso all field resolvers must be implemented in order to avoid compilation errors."),Object(p.b)("h4",{id:"usage-examples-11"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   avoidOptionals: true\n")),Object(p.b)("h3",{id:"showunusedmappers"},Object(p.b)("inlineCode",{parentName:"h3"},"showUnusedMappers")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"true")),Object(p.b)("p",null,"Warns about unused mappers."),Object(p.b)("h4",{id:"usage-examples-12"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   showUnusedMappers: true\n")),Object(p.b)("h3",{id:"enumvalues"},Object(p.b)("inlineCode",{parentName:"h3"},"enumValues")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"EnumValuesMap")),Object(p.b)("p",null,"Overrides the default value of enum values declared in your GraphQL schema, supported\nin this plugin because of the need for integration with ",Object(p.b)("inlineCode",{parentName:"p"},"typescript")," package.\nSee documentation under ",Object(p.b)("inlineCode",{parentName:"p"},"typescript")," plugin for more information and examples."),Object(p.b)("h3",{id:"resolvertypewrappersignature"},Object(p.b)("inlineCode",{parentName:"h3"},"resolverTypeWrapperSignature")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"Promise<T> | T")),Object(p.b)("p",null,"Allow you to override ",Object(p.b)("inlineCode",{parentName:"p"},"resolverTypeWrapper")," definition."),Object(p.b)("h3",{id:"federation"},Object(p.b)("inlineCode",{parentName:"h3"},"federation")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",null,"Supports Apollo Federation"),Object(p.b)("h3",{id:"enumprefix"},Object(p.b)("inlineCode",{parentName:"h3"},"enumPrefix")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"true")),Object(p.b)("p",null,"Allow you to disable prefixing for generated enums, works in combination with ",Object(p.b)("inlineCode",{parentName:"p"},"typesPrefix"),"."),Object(p.b)("h4",{id:"usage-examples-13"},"Usage Examples"),Object(p.b)("h5",{id:"disable-enum-prefixes"},"Disable enum prefixes"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    typesPrefix: I\n    enumPrefix: false\n")),Object(p.b)("h3",{id:"optionalresolvetype"},Object(p.b)("inlineCode",{parentName:"h3"},"optionalResolveType")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",null,"Sets the ",Object(p.b)("inlineCode",{parentName:"p"},"__resolveType")," field as optional field."),Object(p.b)("h3",{id:"immutabletypes"},Object(p.b)("inlineCode",{parentName:"h3"},"immutableTypes")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",null,"Generates immutable types by adding ",Object(p.b)("inlineCode",{parentName:"p"},"readonly")," to properties and uses ",Object(p.b)("inlineCode",{parentName:"p"},"ReadonlyArray"),"."),Object(p.b)("h3",{id:"scalars"},Object(p.b)("inlineCode",{parentName:"h3"},"scalars")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(p.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(p.b)("h4",{id:"usage-examples-14"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(p.b)("h3",{id:"namingconvention"},Object(p.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(p.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(p.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(p.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(p.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(p.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(p.b)("h4",{id:"usage-examples-15"},"Usage Examples"),Object(p.b)("h5",{id:"override-all-names"},"Override All Names"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(p.b)("h5",{id:"upper-case-enum-values"},"Upper-case enum values"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(p.b)("h5",{id:"keep-names-as-is"},"Keep names as is"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(p.b)("h5",{id:"remove-underscores"},"Remove Underscores"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(p.b)("h3",{id:"typesprefix"},Object(p.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(p.b)("p",null,"Prefixes all the generated types."),Object(p.b)("h4",{id:"usage-examples-16"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(p.b)("h3",{id:"skiptypename"},Object(p.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(p.b)("h4",{id:"usage-examples-17"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(p.b)("h3",{id:"nonoptionaltypename"},Object(p.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(p.b)("p",null,"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",null,"Automatically adds ",Object(p.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(p.b)("h4",{id:"usage-examples-18"},"Usage Examples"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")))}s.isMDXComponent=!0},394:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||p;return n?i.a.createElement(m,r(r({ref:t},c),{},{components:n})):i.a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<p;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);