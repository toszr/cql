/* Shared data and functions */ {
    ...
    function joinOrConditions( orConditions ) {
        // return [].concat( orConditions ).join( ", " );
        return [].concat( orConditions ).join( " + " );
    }
    ...
}
...
operatorAnd
  = __* "*"  __*
  / ...
operatorOr
  = __* "+" __*
  / ...
...