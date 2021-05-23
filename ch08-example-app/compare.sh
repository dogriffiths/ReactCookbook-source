#!/bin/bash
mkdir -p screenshots/diff
export HTML=screenshots/compare.html
echo '<body><ul>' > $HTML
for file in screenshots/chrome/*.png
do
    FROM=$file
    TO=$(echo $file | sed 's/chrome/firefox/')
    DIFF=$(echo $file | sed 's/chrome/diff/')
    echo "FROM $FROM TO $TO"
    ls -l $FROM
    ls -l $TO
    METRIC=$(compare -metric AE -fuzz 15% $FROM $TO $DIFF 2>&1)
    echo "<li>$FROM $METRIC<br/><img src=../$DIFF/></li>" >> $HTML
done
echo "</li></body>" >> $HTML

