# Test:
# GET      /User/:id?      -> UserController.find
#   ID parameter
#     No parameter - OK, list expected
#     Stupid parameter (string, null, negative int, invalid int)
#     Right Parameter (int)
#   SORTING attribute
#     No attributes
#     Stupid attributes
#     Right attributes

# POST     /User           -> UserController.create
#     No body
#     Stupid body (not json, not form encoded, escape characters, basically everything a user can do to break/escape your SQL)
#     Right body

# PUT      /User/:id       -> UserController.update
#     No body
#     Stupid body (Wrong params, invalid casing, broken json, attempt to overwrite restricted param like ID, update targeting no fields, remove fields, see sanitization from above)
#     Right parameters (Update 1 or more fields)

# DELETE   /User/:id       -> UserController.destroy
#     No parameter
#     Stupid parameter (see stupid GET parameters)
#     Right parameter