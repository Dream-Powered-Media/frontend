prefix=../services

if [ -n "$1" ]
then
    mypath="$prefix/$1"
    if [ -d "$mypath" ];
    then
        echo "Service $1 already exists!"
    else
        api="$mypath/api"
        comps="$mypath/components"
        entry="$mypath/entry"
        
        mkdir $mypath
        mkdir $api
        mkdir $comps
        mkdir $entry

        echo "export {};" > "$entry/$1.tsx"
        echo ".$1 {}" > "$entry/$1.module.scss"

        echo "export {};" > "$api/index.ts"
        echo "export {};" > "$api/types.ts"
    fi
else
    echo "No service name typed!"
fi
